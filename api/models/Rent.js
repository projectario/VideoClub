/**
 * Rent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'rents',
  attributes: {
    totalPrice: { type: 'number' },
    userId: {
      model: 'User'
    },
    filmId: {
      model: 'Film'
    },

  },

};

