db = db.getSiblingDB('pokemon');

db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'pokemon',
    },
  ],
});

// TODO
db.createCollection('test_collection');
