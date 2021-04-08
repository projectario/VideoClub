
module.exports = {


    friendlyName: 'View edit password',


    description: 'Display "Edit mail" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/account/edit-email'
        }

    },


    fn: async function () {
        let user = null;
        if (this.req.session.userId) {
            user = await User.findOne({ id: this.req.session.userId })
            return { user }
        }
        // Respond with view.
        return { user };

    }


};