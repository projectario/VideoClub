//TODO
// <--- bcrypt HERE

module.exports = {


  friendlyName: 'Login',


  description: 'Login to the App.',


  inputs: {
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
  },


  exits: {
    // success: {
    //   viewTemplatePath: 'pages/entrance/login'
    // }

  },


  fn: async function ({ email, password }) {
    let isUser = await User.findOne({ email: email.toLowerCase() });

    //Check to see if we have this user id the database
    if (!isUser) return this.res.emailDoesNotExist('<h1>We dont know anyone that goes by that name! Try Again!</h1>'); // custom response about not matching email?

    // then find the user and match the provided password with the one in the database
    else if (isUser) {
      let user = await User.findOne({ email: email })
      sails.log(user.password)

      if (user.password === password) {
        sails.log("LOGGED IN!!")
        this.res.redirect('/');
      }
      else {
        return this.res.passwordsDontMatch("<h1>Passwords not match!!!</h1>")
      }
    }

  }


};
