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
    price: { type: 'number' },
    description: { type: 'string' },
    storyline: { type: 'string' },
    releasedDate: { type: 'string' }, // type??
    rating: { type: 'number' },
    posterUrl: { type: 'string' },
    properForKids: { type: 'boolean' },

    rents: {
      collection: 'Rent',
      via: 'filmId'
    }

  },

};

