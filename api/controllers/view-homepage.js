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
  
    if (this.req.session.userId) {
      throw {redirect: '/movies'};
    }

    return {};

  }


};
