//TODO
var bcrypt = require('bcryptjs')

module.exports = {


  friendlyName: 'Login',


  description: 'Login to the App.',


  inputs: {
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
  },

  exits: {},





  fn: async function ({ email, password }, exits) {
    let isUser = await User.findOne({ email: email.toLowerCase() });

    //Check to see if we have this user id the database
    if (!isUser) return this.res.emailDoesNotExist('<h1>We dont know anyone that goes by that name! Try Again!</h1>'); // custom response about not matching email?

    // then find the user and match the provided password with the one in the database
    else if (isUser) {
      let user = await User.findOne({ email: email })

      let match = false
      match = await bcrypt.compare(password, user.password)
      console.log(password)
      console.log(user.password)
      sails.log(user.password)

      if (match) {

        sails.log("LOGGED IN!!")
        this.req.session.userId = user.id;

        sails.log(this.req.session.userId);
        // sails.log(this.req.me);
        return this.res.redirect('/movies')

      }

      else {
        return this.res.passwordsDontMatch("<h1>Passwords not match!!!</h1>")
      }
    }

  }


};
