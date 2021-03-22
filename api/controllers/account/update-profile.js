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


    fn: async function ({ password, }) {
        let userId = this.req.session.userId;

        var newPassword = await bcrypt.hash(password, 12)

        // if (changePassword === confirmPassword) {
        await User.updateOne({ id: userId })
            .set({ password: newPassword });

        delete this.req.session.userId;
        throw { redirect: '/login' };
        // var newEmailAddress = email;
        // if (newEmailAddress !== undefined) {
        //     newEmailAddress = newEmailAddress.toLowerCase();
        //     let conflictingUser = await User.findOne({ email: email })
        //     if (conflictingUser) throw 'badCombo'
        // }
        // var newFirstname = firstName;
        // if (newFirstname !== undefined) { newFirstname.toLowerCase(); }

        // var newLastname = lastname;
        // if (newLastname !== undefined) { newLastname.toLowerCase(); }


    }
};