module.exports = {


  friendlyName: 'View movie',


  description: 'Display "Play-Movie" page.',


  exits: {

    success: {
      viewTemplatePath: 'account/play'
    },
    redirect: {
      responseType: 'redirect'
    }

  },


  fn: async function () {
    let sessionUserId = this.req.session.userId;

    if (sessionUserId == undefined) throw { redirect: '/login' }

    let user = await User.findOne({ id: sessionUserId });
    let film = await Film.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });

    let rent = await Rent.find({ userId: user.id, filmId: this.req.params.id }).limit(1);
    sails.log(rent)
    if (rent.length == 0) {
      throw { redirect: `/title/${film.id}` };
    }
    // Respond with view.
    return { film, user };

  }


};
