var bcrypt = require('bcryptjs')
module.exports = {


    friendlyName: 'Update password',


    description: 'Update the password for the logged-in user.',


    inputs: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
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


    fn: async function ({ firstName, lastName, email, password, }) {
        let userId = this.req.session.userId;

        var newPassword = await bcrypt.hash(password, 12)

        // if (changePassword === confirmPassword) {
        await User.updateOne({ id: userId })
            .set({ password: newPassword });

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
                
                
                delete this.req.session.userId;
                throw { redirect: '/login' };
    }
};