var db = require('../db');

module.exports = {
  messages: {
    get: function (successCB, errorCB = null) {
      $.ajax({
        url: Parse.server,
        type: 'GET',
        data: { order: '-createdAt' },
        contentType: 'application/json',
        success: successCB,
        error: errorCB || function (error) {
          console.error('chatterbox: Failed to fetch messages', error);
        }
      });
    }, // a function which produces all the messages

    post: function (message, successCB, errorCB = null) {
      // todo: save a message to the server
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: Parse.server,
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent');
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

