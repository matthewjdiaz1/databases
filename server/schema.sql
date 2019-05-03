/* TODO
  auto increment values
  set null
*/


CREATE DATABASE chatterbox;
USE chatterbox;

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  userid INTEGER NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY(ID)
);

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY(ID)
);



-- CREATE TABLE rooms (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   roomName TEXT,
--   usernamesId INTEGER,
--   PRIMARY KEY (id)
-- );

-- ALTER TABLE messages ADD FOREIGN KEY(usernameId) REFERENCES users(id);
-- ALTER TABLE rooms ADD FOREIGN KEY(usernamesId) REFERENCES users(id);
-- INSERT INTO users (name, roomId) VALUES ('matt', 1);
-- INSERT INTO users (name, roomId) VALUES ('jeff', 1);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

