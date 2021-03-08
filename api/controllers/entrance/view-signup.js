module.exports = {


    friendlyName: 'View signup',
  
  
    description: 'Display "Signup" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/entrance/signup',
      },
  
      redirect: {
        description: 'The requesting user is already logged in.',
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

  