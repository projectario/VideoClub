/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  attributes: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    isKid: { type: 'boolean' },
    online: {
      type: 'boolean',
      defaultsTo: true
    },
    chats: {
      collection: 'ChatMessage',
      via: 'user'
    },
    rents: {
      collection: 'Rent',
      via: 'userId'
    }
  },

};

