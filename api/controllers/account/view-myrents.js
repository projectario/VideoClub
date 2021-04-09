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
        let rentedMovies = await Rent.find({ userId: user.id });
        let timeCreated = [];
        for (let i = 0; i < rentMovies.length; i++) {
            let dateTimeRented = new Date(rentTime[i].createdAt);
            sails.log(dateTimeRented)
            let dateTimeExp = new Date(dateTimeRented.setDate(dateTimeRented.getDate() + 3));
            sails.log(dateTimeExp)
            timeCreated.push({timeRented: rentedMovies[i].createdAt, id: rentedMovies[i].id})
            // sails.log(timeCreated)

            if (new Date() > dateTimeExp) {
                
            }

            
            // sails.log((dateTimeExp.getTime() - dateTimeRented.getTime()).toString())
        }
        //  find a way to get the createdAt value





        // Find my eBooks
        let mylistOfRents = await Film.find({ id: myRentIds }).meta({ skipRecordVerification: true });

        return { user, mylistOfRents };
    }


}

