const User = require("../../models/User");

module.exports = {


  friendlyName: 'Signup',


  description: 'Signup to the movie club.',


  inputs: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    confirmPassword: { type: 'string' }
  },


  exits: {

  },


  fn: async function ({ firstName, lastName, email, password }) {
    let isUser = await User.findOne({ email })
    console.log(email)
    if (isUser) return;
    else if (password == confirmPassword) {
      let newUser = await User.create({ firstName, lastName, email, password })
      this.res.redirect('/');
    }
    else { }
    // All done.
    this.res.status(406)
    return this.res.view('entrance/view-signup')
  }


};
