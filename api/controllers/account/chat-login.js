module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    username: {
      example: 'sgress454',
      required: true,
      description: 'The username of the user to log in.'
    }
  },


  exits: {
    success: {
      viewTemplatePath: 'entrance/chat-login'
    },

    notFound: {
      responseType: 'notFound'
    }

  },


  fn: async function (inputs, exits, env) {

    // If there's already a user logged in, just send the
    // if (env.req.session.userId) {
    //   return exits.success({ id: env.req.session.userId });
    // }
    // let user = await User.findOne({ id: env.req.session.userId })
    // Attempt to find a user with the specified username.
    let user = await User.findOne({ id: env.req.session.userId })
      .exec(function (err, user) {
        if (err) { return exits.error(err); }

        // If no such user exists, return a 404.  The client will respond by attempting to
        // create the user.
        if (!user) { return exits.notFound(); }
        let username = user.firstName;
          // Set the user ID in the session.
          // env.req.session.userId = user.id;

          // Create an admin chat message.
          ChatMessage.create({
            text: `${user.firstName} joined the room!`
          })
            .meta({ fetch: true })
            .exec(function (err, message) {
              if (err) { return exits.serverError(err); }
              // Blast the message to all connected sockets.
              sails.sockets.blast('chatmessage', {
                verb: 'created',
                id: message.id,
                data: {
                  text: message.text
                }
              });
            });

        // Return the logged-in user info through the `success` exit.
        return exits.success(username);

      });


  }


};
