
module.exports = {

    friendlyName: 'ebook Transaction',
    description: 'The user is buying an ebook.',

    inputs: {
        filmPrice: { type: 'number' },
    },

    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },

    fn: async function ({ filmPrice }) {
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
        }


        await Rent.create({ userId: user.id, filmId: this.req.params.id, totalPrice: filmPrice })

        throw { redirect: `/play/${this.req.params.id}` };





    }

};