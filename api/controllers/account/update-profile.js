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


    fn: async function ({ firstName, lastName, email, password, confirmPassword }) {
        let userId = this.req.session.userId;

        var newPassword = await bcrypt.hash(password, 12)

        // if (changePassword === confirmPassword) {
        await User.updateOne({ id: userId })
            .set({ password: newPassword });


        //update email
        var newEmailAddress = email;

        await User.updateOne({ id: userId })
            .set({ email: newEmailAddress });


        //update firstname
        var newFirstname = firstName;
        await User.updateOne({ id: userId })
            .set({ firstName: newFirstname });


        // update lastname
        var newLastname = lastName;
        await User.updateOne({ id: userId })
            .set({ lastName: newLastname });

        // delete the session so the user is logged out and has to re log in
        delete this.req.session.userId;
        throw { redirect: '/login' };
    }
};