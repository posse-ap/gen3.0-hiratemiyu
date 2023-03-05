DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;

DROP TABLE IF EXISTS webapp.studies;
CREATE TABLE webapp.studies
(   created_at DATE ,
    study_hour INT,
    content VARCHAR(255),
    study_language VARCHAR(255));

INSERT INTO `studies` VALUE (now(),3,"a","a");
INSERT INTO `studies` VALUE ('2023-01-14',3,"b","c");
INSERT INTO `studies` VALUE ('2023-02-01',5,"a","d");
INSERT INTO `studies` VALUE ('2023-02-03',4,"c","e");
INSERT INTO `studies` VALUE ('2023-02-01',1,"a","a");

-- DROP TABLE IF EXISTS questions;
-- CREATE TABLE questions (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   content VARCHAR(255),
--   image VARCHAR(255),
--   supplement VARCHAR(255)
-- ) CHARSET=utf8;

-- DROP TABLE IF EXISTS choices;
-- CREATE TABLE choices (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   question_id INT,
--   name VARCHAR(255),
--   valid boolean,
--   FOREIGN KEY (question_id) REFERENCES questions(id)
-- ) CHARSET=utf8;

-- DROP TABLE IF EXISTS users;
-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(255),
--   email VARCHAR(255),
--   password VARCHAR(255)
-- ) CHARSET=utf8;

-- insert into users (name, email, password) values ("管理者1", "admin@example.com", "password");

-- DROP TABLE IF EXISTS user_invitations;
-- CREATE TABLE user_invitations (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT,
--   -- expired_at DATETIME,
--   invited_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   activated_at DATETIME,
--   token VARCHAR(255),
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- ) CHARSET=utf8;

-- insert into user_invitations (user_id, invited_at, activated_at, token) values (1, DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY), CURRENT_DATE, "token");
