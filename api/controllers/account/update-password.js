var bcrypt = require('bcryptjs')
module.exports = {


    friendlyName: 'Update password',


    description: 'Update the password for the logged-in user.',


    inputs: {
        changePassword: { type: 'string' },
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


    fn: async function ({ changePassword, confirmPassword }) {
        let userId = this.req.session.userId;

        var newPassword = changePassword;
        // sails.log(password)
        // if (changePassword === confirmPassword) {
        await User.updateOne({ id: userId })
            .set({ password: newPassword });
        // sails.log(password)
        // delete this.req.session.userId;
        throw { redirect: '/login' };
        // }
        // else {
        //     throw { problem: '<h1>Passwords not match!!!</h1>' }
        // }

    }
};