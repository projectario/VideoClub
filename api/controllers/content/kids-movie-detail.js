module.exports = {


  friendlyName: 'Kids movie detail',


  description: '',


  inputs: {

  },


  exits: {
    redirect: {
      responseType: 'redirect'
    },
    notProper: {
      responseType: 'unauthorized'
    }
  },


  fn: async function (inputs) {
    let req = this.req;
    let filmId = req.params.id;
    let film = await Film.find({ id: filmId })
    if (!film.properForKids) {
      sails.log(film.properForKids)
      throw { notProper: "" };
    }
    // All done.
    throw { redirect: `/title/${filmId}` };
    // All done.
    return;

  }


};
