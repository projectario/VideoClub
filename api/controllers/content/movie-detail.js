module.exports = {


  friendlyName: 'Movie detail',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'content/movieDetail'
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs) {
    // find the user that is logged in 
    let sessionUserId = this.req.session.userId;
    let user = await User.findOne({id: sessionUserId})

    // find the film                                        // this so that the doesn't throw warnings
    let film = await Film.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });

    // check if the user and the movie have age restrictions

    if (user.isKid == true && film.properForKids == false) throw {redirect: '/kidsmovies'};

    // All done.
    return { film };

  }


};
