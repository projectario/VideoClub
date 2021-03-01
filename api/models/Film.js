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
    price: { type: 'number' }, // number?
    description: { type: 'string' },
    releasedDate: { type: 'string' }, // type??
    rating: { type: 'number' },
    posterUrl: { type: 'string' },

    rents: {
      collection: 'Rent',
      via: 'filmId'
    }

  },

};

