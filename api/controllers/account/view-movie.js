module.exports = {


  friendlyName: 'View movie',


  description: 'Display "Play-Movie" page.',


  exits: {

    success: {
      viewTemplatePath: 'account/play'
    }

  },


  fn: async function () {
    let sessionUserId = this.req.session.userId;

    if (sessionUserId == undefined) throw { redirect: '/login' }

    let user = await User.findOne({ id: sessionUserId });
    let film = await Film.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });
    // Respond with view.
    return { film };

  }


};
