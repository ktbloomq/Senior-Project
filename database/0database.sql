CREATE OR REPLACE DATABASE `senior-project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `senior-project`;

CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username_unique` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `posts` (
  `postid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `parent` int(11) DEFAULT NULL,
  `body` varchar(1000) NOT NULL,
  `location` varchar(1000) DEFAULT NULL,
  `image_url` varchar(1000) DEFAULT NULL,
  `likes` int(11) DEFAULT 0 NOT NULL,
  PRIMARY KEY (`postid`),
  KEY `posts_posts_FK` (`parent`),
  KEY `posts_users_FK` (`userid`),
  CONSTRAINT `posts_posts_FK` FOREIGN KEY (`parent`) REFERENCES `posts` (`postid`) ON DELETE CASCADE,
  CONSTRAINT `posts_users_FK` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `senior-project`.`post_info` AS
select
    `p`.`postid` AS `postid`,
    `p`.`userid` AS `userid`,
    `u`.`username` AS `username`,
    `p`.`parent` AS `parent`,
    `p`.`body` AS `body`,
    `p`.`location` AS `location`,
    `p`.`image_url` AS `image_url`,
    `p`.`likes` AS `likes`
from
    (`senior-project`.`posts` `p`
left join `senior-project`.`users` `u` on
    (`p`.`userid` = `u`.`userid`));