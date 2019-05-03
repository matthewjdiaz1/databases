var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      var queryStr = 'select * from messages';
      db.query(queryStr, (err, results) => {
        if (err) {
          throw 'Unsuccessful get messages query';
        }
        callback(err, results);
      });
    },

    post: function (params, callback) {
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      var queryStr = 'INSERT INTO messages (userid) VALUES (?)';
      db.query(queryStr, params, (err, results) => {
        // if (err) {
        //   throw 'Unsuccessful post messages query';
        // }
        // db.connection.query('SELECT * FROM messages', (err, data) => {
        //   console.log(data);
        //   callback(data);
        // });
        callback(err, results);

      });
    },
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, (err, results) => {
        if (err) {
          throw 'Unsuccessful query get users';
        }
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('params', params);
      var queryStr = `INSERT INTO users(username) VALUES ('${params}')`;
      db.query(`INSERT INTO users(username) VALUES ('${params}')`, (err, results) => {
        // if (err) {
        //   console.log('param after', results);
        //   // console.log(err);
        //   throw 'Unsuccessful query post users';
        // }
        // db.query('SELECT * FROM messages', (err, data) => {
        //   console.log(data);
        //   callback(data);
        // });
        callback(err, results);

      });
    },
  }
};

