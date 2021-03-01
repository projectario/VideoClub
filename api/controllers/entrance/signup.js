
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


  fn: async function (inputs) {
    let isUser = await User.findOne({ email: inputs.email })
    console.log(email)
    if (isUser) {
      return this.res.alreadyExists("<h2> Email already in use! </h2>")
    }
    else {
      if (inputs.password == inputs.confirmPassword) {
        var user = await User.create({ firstName: inputs.firstName, lastName: inputs.lastName, email: inputs.email, password: inputs.password })
        this.res.redirect('/');
      } else {
        this.res.status (406);
        return this.res.view('entrance/view-signup')
      }
    }   
  }


};
