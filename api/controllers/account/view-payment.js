module.exports = {


  friendlyName: 'View payment',


  description: 'Display "Payment" page.',


  exits: {

    success: {
      viewTemplatePath: 'account/payment'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
