// const Purchase = require("../../models/Userbook");
// const Book = require("../../models/Book");

//   ^ comment out or erase this lines!!!!! 
//  || Model.find is not a function!!!

module.exports = {

    friendlyName: 'View rent',
    description: 'Display Rents - id page.',

    exits: {
        success: {
            viewTemplatePath: 'pages/account/myrent'
        }
    },


    fn: async function () {
        // find the user that is logged in 
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
        }

        // Find the transactions of the logged in user.
        let myrenTransactions = await Rent.find({ userId: user.id }).meta({ skipRecordVerification: true });

        // Extract the bookId from the purchased ebooks.
        let myRentIds = []
        myrenTransactions.forEach(transaction => {
            myRentIds.push(transaction.filmId)
        });

        // Creating a variable to get rents 
        let rentTime = await Rent.find({ userId: user.id });
        let timeCreated = [];
        for (let i = 0; i < rentTime.length; i++) {
            let dateTimeRented = new Date(rentTime[i].createdAt);
            sails.log(dateTimeRented)
            let dateTimeExp = new Date(dateTimeRented.setDate(dateTimeRented.getDate() + 3));
            timeCreated.push({timeRented: rentTime[i].createdAt, id: rentTime[i].id})
            sails.log(timeCreated)

            if (dateTimeExp - dateTimeRented >= 3) {
                for (let i = 0; i < timeCreated.length; i++) {
                    let userRentId = timeCreated[i].id
                    await Rent.destroy({ userId: userRentId })
                }
            }
            sails.log(dateTimeExp)
        }
        //  find a way to get the createdAt value





        // Find my eBooks
        let mylistOfRents = await Film.find({ id: myRentIds }).meta({ skipRecordVerification: true });

        return { user, mylistOfRents };
    }


}

