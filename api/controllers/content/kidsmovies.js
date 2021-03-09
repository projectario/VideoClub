module.exports = {

  friendlyName: 'View  kids movies',

  description: 'Display "Kids Movie" page.',

  exits: {
    success: {
      viewTemplatePath: 'content/kidsmovies.ejs'
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function () {
    if (this.req.session.userId == undefined) throw { redirect: '/login' }
    let listOfKidsMovies = await Film.find({ properForKids: 1 });
    sails.log(listOfKidsMovies)
    // Respond with view.

    return { listOfKidsMovies };

  }


};