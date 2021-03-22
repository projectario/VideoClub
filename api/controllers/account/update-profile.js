module.exports = {


    friendlyName: 'Update profile',


    description: 'Update the profile for the logged-in user.',


    inputs: {

        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        emailAddress: {
            type: 'string'
        },

    },
    exits: {
        redirect: {
            responseType: 'redirect'
        },
        problem: {
            responseType: 'badCombo'
        }
    },
    fn: async function ({ firstName, lastname, email }) {
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
}