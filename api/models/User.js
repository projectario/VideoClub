module.exports = {
  tableName: 'users',
  attributes: {
    username: { type: 'string', required: true },
    online: { type: 'boolean', defaultsTo: true },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    isKid: { type: 'boolean' },
    rents: {
      collection: 'Rent',
      via: 'userId'
    },
    chats: {
      collection: 'ChatMessage',
      via: 'user'
    }
  },

};

