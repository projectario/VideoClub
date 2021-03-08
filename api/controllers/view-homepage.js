module.exports = {


  friendlyName: 'View homepage',


  description: 'Display Homepage.',


  exits: {
    success: {
      statusCode: 200,
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect'
    }
 
  },


  fn: async function () {    
    sails.log.verbose(this.req.session.userId)
    if (this.req.session.userId)
    return {redirect: '/movies'};
    // Respond with view.
    // return {};

  }


};
