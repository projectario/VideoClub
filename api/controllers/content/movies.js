module.exports = {


  friendlyName: 'Movies',


  description: 'Movies something.',


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


  fn: async function (inputs) {
    if (this.req.session.userId == undefined) throw { redirect: '/login'}

    // All done.
    return;

  }


};
