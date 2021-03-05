var bcrypt = require('bcryptjs')
module.exports = {


  friendlyName: 'Signup',


  description: 'Signup to the movie club.',


  inputs: {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    confirmPassword: { type: 'string', required: true },
    isAdult: { type: 'boolean', },
  },


  exits: {},


  fn: async function ({ firstName, lastName, email, password, confirmPassword, isAdult }) {
    sails.log(firstName, lastName, email, password, confirmPassword, isAdult);
    this.email = email.toLowerCase(); // this propably works
    var isUser = await User.findOne({ email: email });
    if (isUser) this.res.alreadyExists("<h2> Email already in use! </h2>");
    else {
      if (password == confirmPassword) {
        await User.create({ firstName, lastName, email, password: await bcrypt.hash(password, 12), isAdult })
        this.res.redirect('/')
      }
      else {
        return this.res.passwordsDontMatch("<h1>Passwords not match!!!</h1>")
      }
    }
  }

};
