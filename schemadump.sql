
DROP TABLE IF EXISTS `Tags`;
CREATE TABLE `Tags` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Tags` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `sighting_tag`;
CREATE TABLE `sighting_tag` (
  `sighting_id` mediumint(9) DEFAULT NULL,
  `tag_id` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `sighting_tag` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `sightings`;
CREATE TABLE `sightings` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `lat` decimal(10,6) NOT NULL,
  `lng` decimal(10,6) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `sightings` WRITE;

INSERT INTO `sightings` VALUES (1,12.139058,-86.270671,'2021-08-30 16:00:01','description 1'),(2,12.104055,-86.248803,'2021-08-30 17:00:01','description 2');

UNLOCK TABLES;