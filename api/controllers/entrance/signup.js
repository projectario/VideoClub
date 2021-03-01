
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


  fn: async function ({ firstName, lastName, email, password, confirmPassword }) {
    let isUser = await User.findOne({ email: email })
    console.log(email)
    if (isUser) {
      return this.res.alreadyExists("<h2> Email already in use! </h2>")
    }
    else if (password == confirmPassword) {
      let user = await User.create({ firstName: firstName, lastName: lastName, email: email, password: password })
      this.res.redirect('/');
    }
    else {
      this.res.status (406);
      return this.res.view('entrance/view-signup')
    }
  }


};
