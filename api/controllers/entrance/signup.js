
module.exports = {


  friendlyName: 'Signup',


  description: 'Signup to the movie club.',


  inputs: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    confirmPassword: { type: 'string' },
    isAdult: { type: 'boolean' },
  },


  exits: {},


  fn: async function ({firstName, lastName, email, password, confirmPassword, isAdult}) {
    console.log(firstName, lastName, email, password, confirmPassword, isAdult);
    var isUser = await User.findOne({email: email});
    if (isUser) this.res.alreadyExists("<h2> Email already in use! </h2>");
    else {
      if (password == confirmPassword) {
        await User.create({firstName: firstName, lastName: lastName, email: email, password: password, confirmPassword: confirmPassword})
        this.res.redirect('/')
      }
      else {
        return this.res.passwordsDontMatch("<h1>Passwords not match!!!</h1>")
      }
    }
  }

};
