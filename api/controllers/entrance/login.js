//TODO
var bcrypt = require('bcryptjs')

module.exports = {


  friendlyName: 'Login',


  description: 'Login to the App.',


  inputs: {
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
  },

  // we can handle redirects and responses like this now
  exits: {
    success: {},
    redirect: {
      responseType: 'redirect'
    },
    problem: {
      responseType: 'badCombo'
    },
  },





  fn: async function ({ email, password }) {

    // if (this.req.session.userId) throw {redirect: '/movies'};
    let isUser = await User.findOne({ email: email.toLowerCase() });

    //Check to see if we have this user id the database
    if (!isUser) throw { problem: '<h1>Something went wrong! Please try Again!</h1>' } // custom response about not matching email?

    // then find the user and match the provided password with the one in the database
    else if (isUser) {
      let user = await User.findOne({ email: email })

      let match = false
      match = await bcrypt.compare(password, user.password)


      if (match) {

        sails.log("LOGGED IN!!")
        this.req.session.userId = user.id;
        await User.updateOne({id: user.id}).set({online: true})
        if (user.isKid) throw { redirect: '/kidsmovies' }
        throw { redirect: '/movies' }
      }

      else {
        throw { problem: "<h1>Passwords not match!!!</h1>" }
      }

    }

  }


};
