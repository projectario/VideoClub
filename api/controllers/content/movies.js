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
    if (this.req.session.userId == undefined) throw { redirect: '/login' }

    let listOfMovies = await Film.find();
    // All done.
    return { listOfMovies };

  }


};
