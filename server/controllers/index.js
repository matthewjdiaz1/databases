var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log('Get message error');
        }
        res.json(results);
        // res.end();
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      var params = [req.body.message, req.body.userid, req.body.roomname];
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log('post message error');
        }
        res.sendStatus(201);
        // res.end();
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          console.log('Get users error');
        }
        res.json(results);
        // res.end();
      });
    },
    post: function (req, res) {
      var reqBody = [req.body.username];
      console.log('this is in the controller user post:', reqBody);
      models.users.post(reqBody, (err, results) => {
        if (err) {
          console.log('post users error');
        }

        res.sendStatus(201);
        // res.end();
      });
    }
  }
};

