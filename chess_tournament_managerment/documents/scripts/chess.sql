-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: chess_tournament
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actual_tournament_sponsors`
--

DROP TABLE IF EXISTS `actual_tournament_sponsors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actual_tournament_sponsors` (
  `sponsor_id` int(11) NOT NULL,
  `tournaments_id` int(11) NOT NULL,
  PRIMARY KEY (`sponsor_id`,`tournaments_id`),
  KEY `fk_actual_tournament_sponsors_list_of_sponsors1_idx` (`sponsor_id`),
  KEY `fk_actual_tournament_sponsors_tournaments1_idx` (`tournaments_id`),
  CONSTRAINT `fk_actual_tournament_sponsors_list_of_sponsors1` FOREIGN KEY (`sponsor_id`) REFERENCES `list_of_sponsors` (`sponsor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_actual_tournament_sponsors_tournaments1` FOREIGN KEY (`tournaments_id`) REFERENCES `tournaments` (`tournament_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actual_tournament_sponsors`
--

LOCK TABLES `actual_tournament_sponsors` WRITE;
/*!40000 ALTER TABLE `actual_tournament_sponsors` DISABLE KEYS */;
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('1', '1');
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('2', '1');
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('3', '1');
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('4', '1');
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('2', '2');
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('5', '2');
INSERT INTO `chess_tournament`.`actual_tournament_sponsors` (`sponsor_id`, `tournaments_id`) VALUES ('3', '3');

/*!40000 ALTER TABLE `actual_tournament_sponsors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chess_clubs`
--

DROP TABLE IF EXISTS `chess_clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chess_clubs` (
  `club_id` int(11) NOT NULL AUTO_INCREMENT,
  `club_name` nvarchar(255) NOT NULL,
  `club_address` nvarchar(255) NOT NULL,
  `other_club_details` nvarchar(255) NOT NULL,
  `organizer_id` nvarchar(255) NOT NULL,
  PRIMARY KEY (`club_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chess_clubs`
--

LOCK TABLES `chess_clubs` WRITE;
/*!40000 ALTER TABLE `chess_clubs` DISABLE KEYS */;
INSERT INTO `chess_clubs` VALUES (1,'Viet Nam 1','Viet Nam','club chess Viet Nam','1'),(2,'Bangkok','Thailand','Thailand chessclub','1'),(3,'New York','America','club chess America','1'),(4,'Chicago','America','America chessclub chicago','1'),(5,'Viet Nam 2','Viet Nam','club chess Viet Nam','1'),(6,'Bangkok 2','Thailand','Thailand chessclub','1');
/*!40000 ALTER TABLE `chess_clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_of_sponsors`
--

DROP TABLE IF EXISTS `list_of_sponsors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `list_of_sponsors` (
  `sponsor_id` int(11) NOT NULL AUTO_INCREMENT,
  `sponsor_name` nvarchar(255) NOT NULL,
  `sponsor_phone` nvarchar(255) NOT NULL,
  `other_sponsor_details` nvarchar(255) NOT NULL,
  PRIMARY KEY (`sponsor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_of_sponsors`
--

LOCK TABLES `list_of_sponsors` WRITE;
/*!40000 ALTER TABLE `list_of_sponsors` DISABLE KEYS */;
INSERT INTO `list_of_sponsors` VALUES (1,'SamSung','0983849383','SamSung Korea'),(2,'Toshiba','02438777','SamSung Korea'),(3,'Vin Group','095432222','Vin group Viet Nam'),(4,'Ififsolution','0984324383','98A Nguy Nhu Kon Tum'),(5,'SamSung VietNam','0933849385','SamSung VietNam');
/*!40000 ALTER TABLE `list_of_sponsors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `match_star_datetime` datetime NOT NULL,
  `result_code` int(11) NOT NULL,
  `match_end_datetime` datetime NOT NULL,
  `player_id_1` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `player_id_2` int(11) NOT NULL,
  PRIMARY KEY (`player_id_1`,`tournament_id`,`match_star_datetime`,`player_id_2`),
  KEY `fk_matches_ref_result_codes_idx` (`result_code`),
  KEY `fk_matches_player_tournament_participation1_idx` (`player_id_1`,`tournament_id`),
  CONSTRAINT `fk_matches_player_tournament_participation1` FOREIGN KEY (`player_id_1`, `tournament_id`) REFERENCES `player_tournament_participation` (`player_id`, `tournament_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_matches_ref_result_codes` FOREIGN KEY (`result_code`) REFERENCES `ref_result_codes` (`result_code`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES ('2018-06-06 15:41:09',1,'2018-06-06 16:41:09',1,1,2),('2018-06-06 15:41:09',1,'2018-06-06 16:41:09',1,1,4),('2018-06-07 15:41:09',2,'2018-06-06 16:41:09',1,1,3),('2018-06-07 15:41:09',1,'2018-06-06 16:41:09',2,1,3),('2018-06-11 15:41:11',1,'2018-06-11 16:41:11',2,1,3),('2018-06-12 15:41:12',1,'2018-06-12 16:41:12',2,1,3),('2018-06-07 15:41:09',3,'2018-06-06 16:41:09',2,2,3),('2018-06-10 15:41:10',3,'2018-06-10 16:41:10',2,2,3);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_tournament_participation`
--

DROP TABLE IF EXISTS `player_tournament_participation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_tournament_participation` (
  `final_result` nvarchar(255) NOT NULL,
  `player_id` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  PRIMARY KEY (`player_id`,`tournament_id`),
  KEY `fk_player_tournament_participation_players1_idx` (`player_id`),
  KEY `fk_player_tournament_participation_tournaments1_idx` (`tournament_id`),
  CONSTRAINT `fk_player_tournament_participation_players1` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_player_tournament_participation_tournaments1` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`tournament_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_tournament_participation`
--

LOCK TABLES `player_tournament_participation` WRITE;
/*!40000 ALTER TABLE `player_tournament_participation` DISABLE KEYS */;
INSERT INTO `player_tournament_participation` VALUES ('final result',1,1),('final result',1,2),('final result',1,3),('final result',2,1),('final result',2,2),('final result',2,3),('final result',2,4),('final result',2,5),('final result',3,1),('final result',3,2),('final result',3,3),('final result',3,4),('final result',3,5);
/*!40000 ALTER TABLE `player_tournament_participation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `players` (
  `player_id` int(11) NOT NULL AUTO_INCREMENT,
  `club_id` int(11) NOT NULL,
  `first_name` nvarchar(255) NOT NULL,
  `last_name` nvarchar(255) NOT NULL,
  `address` nvarchar(255) NOT NULL,
  `phone_number` nvarchar(255) NOT NULL,
  `email_address` nvarchar(255) NOT NULL,
  `other_player_details` nvarchar(255) NOT NULL,
  `ranking_code` int(11) NOT NULL,
  PRIMARY KEY (`player_id`),
  KEY `fk_players_chess_clubs1_idx` (`club_id`),
  KEY `fk_players_ref_ranking_codes1_idx` (`ranking_code`),
  CONSTRAINT `fk_players_chess_clubs1` FOREIGN KEY (`club_id`) REFERENCES `chess_clubs` (`club_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_players_ref_ranking_codes1` FOREIGN KEY (`ranking_code`) REFERENCES `ref_ranking_codes` (`ranking_code`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,1,'Truong Long','Phu','Viet Nam','+84334659661','phutl2296@gmail.com','clever',4),(2,1,'Ariana Duma','Sara','Krung Thep Maha Nakhon','+8498394857','sara9944@gmail.com','intellij brain',1),(3,1,'Lombok','Man','BangKok','+3248394857','sara9944@gmail.com','intellij brain',2),(4,1,'Nguyen Duc','Nghia','Viet Nam','+84334659662','DucNghia@gmail.com','intellij brain',1),(5,1,'Karma','Na','Chicago','098394857','karma22@gmail.com',' brain',3);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_ranking_codes`
--

DROP TABLE IF EXISTS `ref_ranking_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ref_ranking_codes` (
  `ranking_code` int(11) NOT NULL AUTO_INCREMENT,
  `ranking_description` nvarchar(255) NOT NULL,
  PRIMARY KEY (`ranking_code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_ranking_codes`
--

LOCK TABLES `ref_ranking_codes` WRITE;
/*!40000 ALTER TABLE `ref_ranking_codes` DISABLE KEYS */;
INSERT INTO `ref_ranking_codes` VALUES (1,'Copper'),(2,'silver'),(3,'gold'),(4,'Grandmaster');
/*!40000 ALTER TABLE `ref_ranking_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_result_codes`
--

DROP TABLE IF EXISTS `ref_result_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ref_result_codes` (
  `result_code` int(11) NOT NULL AUTO_INCREMENT,
  `result_description` nvarchar(255) NOT NULL,
  PRIMARY KEY (`result_code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_result_codes`
--

LOCK TABLES `ref_result_codes` WRITE;
/*!40000 ALTER TABLE `ref_result_codes` DISABLE KEYS */;
INSERT INTO `ref_result_codes` VALUES (1,'Win'),(2,'Lose'),(3,'Draw');
/*!40000 ALTER TABLE `ref_result_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_organizers`
--

DROP TABLE IF EXISTS `tournament_organizers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tournament_organizers` (
  `organizer_name` nvarchar(255) NOT NULL,
  `organizer_details` nvarchar(255) NOT NULL,
  `organizer_id` int(11) NOT NULL AUTO_INCREMENT,
  `club_id` int(11) NOT NULL,
  PRIMARY KEY (`organizer_id`),
  KEY `fk_tournament_organizers_chess_clubs1_idx` (`club_id`),
  CONSTRAINT `fk_tournament_organizers_chess_clubs1` FOREIGN KEY (`club_id`) REFERENCES `chess_clubs` (`club_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_organizers`
--

LOCK TABLES `tournament_organizers` WRITE;
/*!40000 ALTER TABLE `tournament_organizers` DISABLE KEYS */;
INSERT INTO `tournament_organizers` VALUES ('Kington','Chess is a two-player strategy board game played on a chessboard',1,1),('SamSung','The first generally recognized World Chess Champion, Wilhelm Steinitz, claimed his title in 1886',2,2),('Discovery','Since the second half of the 20th century, computers have been programmed to play chess with increasing success,',3,3);
/*!40000 ALTER TABLE `tournament_organizers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournaments`
--

DROP TABLE IF EXISTS `tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tournaments` (
  `tournament_id` int(11) NOT NULL AUTO_INCREMENT,
  `tournament_start_date` date NOT NULL,
  `tournament_end_date` date NOT NULL,
  `tournament_name` nvarchar(255) NOT NULL,
  `tournament_details` nvarchar(255) NOT NULL,
  `organizer_id` int(11) NOT NULL,
  PRIMARY KEY (`tournament_id`),
  KEY `fk_tournaments_tournament_organizers1_idx` (`organizer_id`),
  CONSTRAINT `fk_tournaments_tournament_organizers1` FOREIGN KEY (`organizer_id`) REFERENCES `tournament_organizers` (`organizer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,'2018-06-06','2018-08-08','Scuber','Asean chess tournament',1),(2,'2017-08-08','2017-10-10','Earth','Earth autumn',2),(3,'2018-08-08','2018-10-10','Sun','There are many variants of chess that utilize different rules, pieces, or boards',2),(4,'2016-08-08','2016-10-10','Earth','One of these, Chess960 (originally named \"Fischerandom\")',3),(5,'2018-10-10','2018-12-12','Earth','incorporates regular chess rules but with one of 960 different possible start-up positions',2);
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-06 10:00:59
