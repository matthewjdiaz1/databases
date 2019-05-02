CREATE DATABASE chatterbox;
USE chatterbox;

CREATE TABLE users (
  id INTEGER,
  name TEXT(255),
  room INTEGER,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INTEGER,
  message TEXT(255),
  username INTEGER,
  room INTEGER,
  PRIMARY KEY(id)
);


CREATE TABLE rooms (
  id INTEGER,
  roomName TEXT,
  usernames INTEGER,
  PRIMARY KEY (id)
);

ALTER TABLE messages ADD FOREIGN KEY(username) REFERENCES users(id);
ALTER TABLE rooms ADD FOREIGN KEY(usernames) REFERENCES users(id);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

