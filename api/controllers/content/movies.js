module.exports = {


  friendlyName: 'Movies',


  description: 'Show all movies and let the user choose one.',


  inputs: {
    genre: {
      type: 'string',
    }

  },


  exits: {
    success: {
      viewTemplatePath: 'content/movies'
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function ({ genre }) {

    let sessionUserId = this.req.session.userId;

    if (sessionUserId == undefined) throw { redirect: '/login' }

    let user = await User.findOne({ id: sessionUserId })
    // sails.log(user)
    if (user.isKid) throw { redirect: '/kidsmovies' }

    // let listOfMovies = await Film.find();
    let listOfMovies;
    if (genre == 'All') {
      listOfMovies = await Film.find();

    } else {
      listOfMovies = await Film.find({ genre: genre })

    }
    // All done.
    return { listOfMovies, genre };

  }


};
