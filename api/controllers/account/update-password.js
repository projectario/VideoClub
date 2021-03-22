var bcrypt = require('bcryptjs')
module.exports = {


    friendlyName: 'Update password',


    description: 'Update the password for the logged-in user.',


    inputs: {
        password: { type: 'string' },
        confirmPassword: { type: 'string', required: true },
    },
    exits: {
        redirect: {
            responseType: 'redirect'
        },
        problem: {
            responseType: 'badCombo'
        }
    },


    fn: async function ({ password, confirmPassword }) {
        let userId = this.req.session.userId;

        var newPassword = await bcrypt.hash(password, 12)
        // sails.log(password)
        // if (changePassword === confirmPassword) {
        await User.updateOne({ id: userId })
            .set({ password: newPassword });
        // sails.log(password)
        delete this.req.session.userId;
        throw { redirect: '/login' };
        // }
        // else {
        //     throw { problem: '<h1>Passwords not match!!!</h1>' }
        // }

    }
};