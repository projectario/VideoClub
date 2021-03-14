module.exports = {


  friendlyName: 'View movie',


  description: 'Display "Play-Movie" page.',


  exits: {

    success: {
      viewTemplatePath: 'account/play'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
