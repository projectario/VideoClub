module.exports = {

  friendlyName: 'View movie',

  description: 'Display "Movie" page.',

  exits: {},


  fn: async function () {
    let thisMovie = await Film.findOne({ id: 12 })
    // sails.log(thisMovie)
    // sails.log(thisMovie.storyline)
    // Respond with view.

    return {};

  }


};
