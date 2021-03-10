module.exports = {

  friendlyName: 'View  kids movies',

  description: 'Display "Kids Movie" page.',



  inputs: {
    genre: {
      type: 'string',
    }

  },

  exits: {
    success: {
      viewTemplatePath: 'content/kidsmovies.ejs'
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function ({ genre }) {

    // Respond with view.
    let sessionUserId = this.req.session.userId;

    if (sessionUserId == undefined) throw { redirect: '/login' }

    // let user = await User.findOne({ id: sessionUserId })
    // sails.log(user)
    // if (user.isKid) throw { redirect: '/kidsmovies' }

    // let listOfMovies = await Film.find();
    let listOfKidsMovies;
    if (genre == 'All') {
      listOfKidsMovies = await Film.find({ properForKids: 1 });

    } else {
      listOfKidsMovies = await Film.find({ genre: genre, properForKids: 1 })

    }
    // All done.
    return { listOfKidsMovies, genre };
    // ............................................
    // let sessionUserId = this.req.session.userId;

    // if (sessionUserId == undefined) throw { redirect: '/login' }

    // let user = await User.findOne({ id: sessionUserId })
    // // sails.log(user)
    // // if (user.isKid) throw { redirect: '/kidsmovies' }

    // // let listOfMovies = await Film.find();
    // let listOfMovies;
    // if (genre == 'All') {
    //   listOfMovies = await Film.find({ properForKids: 1 });

    // } else {
    //   listOfMovies = await Film.find({ genre: genre, properForKids: 1 })

    // }
    // // All done.
    // return { listOfMovies, genre };



  }


};