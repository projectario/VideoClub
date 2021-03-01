/**
 * Film.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'films',
  attributes: {
    title: { type: 'string' },
    genre: { type: 'string' },
    price: { type: 'numeric' },
    description: { type: 'string' },
    releasedDate: { type: 'string' },
    rating: {}



  },

};

