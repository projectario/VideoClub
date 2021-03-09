module.exports = {


  friendlyName: 'Movies',


  description: 'Show all movies and let the user choose one.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'content/movies'
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function () {

    let sessionUserId = this.req.session.userId;

    if (sessionUserId == undefined) throw { redirect: '/login' }

    let user = User.findOne({ id: sessionUserId })
    if (user.isKid) throw {redirect: '/movies/kids'}
    
    let listOfMovies = await Film.find();
    // All done.
    return { listOfMovies };

  }


};
