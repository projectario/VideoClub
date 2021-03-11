module.exports = {


  friendlyName: 'Movie detail',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'content/movieDetail'
    }
  },


  fn: async function (inputs) {
    let req = this.req;
    let filmId = req.params.id;
    let film = await Film.findOne({ id: filmId }).meta({ skipRecordVerification: true });
    // All done.
    return { film };

  }


};
