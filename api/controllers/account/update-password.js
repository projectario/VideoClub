var bcrypt = require('bcryptjs')
module.exports = {


    friendlyName: 'Update password',


    description: 'Update the password for the logged-in user.',


    inputs: {
        password: { type: 'string' },
        confirmPassword: { type: 'string', required: true },
    },


    fn: async function ({ password, confirmPassword }) {
        if (this.req.session.userId) {
            sails.log(password)
            if (password === confirmPassword) {
                await User.updateOne({ id: this.req.me.id })
                    .set({ password: await bcrypt.hash(password, 12) })

                throw { redirect: '/login' };
            }
            else {
                throw { problem: '<h1>Passwords not match!!!</h1>' }
            }
        }
    }
};