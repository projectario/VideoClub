module.exports = {


  friendlyName: 'View homepage',


  description: 'Display Homepage.',


  exits: {
    success: {
      statusCode: 200,
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: '/movies'
    }
 
  },


  fn: async function () {    
    sails.log(this.req.session);

    // Respond with view.
    return {};

  }


};
