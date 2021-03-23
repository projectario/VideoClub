var bcrypt = require('bcryptjs')
module.exports = {


    friendlyName: 'Update password',


    description: 'Update the password for the logged-in user.',


    inputs: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        // confirmPassword: { type: 'string', required: true },
    },
    exits: {
        redirect: {
            responseType: 'redirect'
        },
        problem: {
            responseType: 'badCombo'
        },
        message: {
            responseType: 'Email update'
        }
    },


    fn: async function ({ firstName, lastName, email, password, confirmPassword }) {
        let res = this.res
        let userId = this.req.session.userId;
        let user = await User.findOne({ id: userId });
        // sails.log(user)


        // if (!(password === confirmPassword)) {
        //     throw { redirect: '/account/profile' }
        // } else {
        //     var newPassword = await bcrypt.hash(password, 12)
        //     await User.updateOne({ id: userId })
        //         .set({ password: newPassword });
        //     delete this.req.session.userId;
        //     throw { redirect: '/login' };
        // }

        //update email

        var newEmail = email
        sails.log(newEmail)
        var validEmail = await User.findOne({ email: newEmail })
        sails.log(validEmail)
        // sails.log(validEmail.email)
        if (validEmail !== undefined) throw { problem: '<h2> Email already in use! </h2>' }
        else {
            await User.updateOne({ id: userId })
                .set({ email: newEmail });
            delete this.req.session.userId;
            throw { redirect: '/login' };

        }





        //update firstname
        var newFirstname = firstName;
        await User.updateOne({ id: userId })
            .set({ firstName: newFirstname });


        // update lastname
        var newLastname = lastName;
        await User.updateOne({ id: userId })
            .set({ lastName: newLastname });

        // delete the session so the user is logged out and has to re log in
        // delete this.req.session.userId;
        // throw { redirect: '/login' };
        // return { user }
    }

};