module.exports = {


  friendlyName: 'View payment',


  description: 'Display Payment page.',


  exits: {

    success: {
      viewTemplatePath: 'account/payment'
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function () {
    let sessionUserId = this.req.session.userId;
    let user;
    if (sessionUserId) {
      user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
    }
    let film = await Film.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });
    let rent = await Rent.find({ userId: user.id, filmId: this.req.params.id }).limit(1);
    sails.log(rent)
    if (rent.length !== 0) {
      throw { redirect: `/play/${film.id}` }
    }

    // return { redirect: `/payment/${film.id}` }

    // Find the movie the user wants to rent



    return { user, film };


  }


};
