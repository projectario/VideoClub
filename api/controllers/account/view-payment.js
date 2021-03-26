module.exports = {


  friendlyName: 'View payment',


  description: 'Display "Payment" page.',


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

    if (sessionUserId == undefined) throw { redirect: '/login' }

    let user = await User.findOne({ id: sessionUserId });
    let film = await Film.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });

    // throw { redirect: '/play' }
    // Respond with view.
    return { film, user };


  }


};
