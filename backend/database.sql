-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: thinkerviewed
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Answers`
--

DROP TABLE IF EXISTS `Answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `answer_text` varchar(45) NOT NULL,
  `is_correct` tinyint NOT NULL,
  `Questions_id` int NOT NULL,
  PRIMARY KEY (`id`,`Questions_id`),
  KEY `fk_Answers_Questions_idx` (`Questions_id`),
  CONSTRAINT `fk_Answers_Questions` FOREIGN KEY (`Questions_id`) REFERENCES `Questions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Answers`
--

LOCK TABLES `Answers` WRITE;
/*!40000 ALTER TABLE `Answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questionnary`
--

DROP TABLE IF EXISTS `Questionnary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Questionnary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `video_link` varchar(255) NOT NULL,
  `categorie` enum('Energie','Sciences','Societe','Medias','Terrorisme','Environnement','Economie et Finance','Geopolitique','Internet et Technologie') NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `protagonist` varchar(45) NOT NULL,
  `miniature` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questionnary`
--

LOCK TABLES `Questionnary` WRITE;
/*!40000 ALTER TABLE `Questionnary` DISABLE KEYS */;
/*!40000 ALTER TABLE `Questionnary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questions`
--

DROP TABLE IF EXISTS `Questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_text` varchar(255) NOT NULL,
  `timestamp_answer` varchar(45) NOT NULL,
  `text_bad_answer` varchar(255) NOT NULL,
  `status` enum('pending','correct','incorrect') NOT NULL DEFAULT 'pending',
  `Questionnary_id` int NOT NULL,
  PRIMARY KEY (`id`,`Questionnary_id`),
  KEY `fk_Questions_Questionnary1_idx` (`Questionnary_id`),
  CONSTRAINT `fk_Questions_Questionnary1` FOREIGN KEY (`Questionnary_id`) REFERENCES `Questionnary` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questions`
--

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `Questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `profil_picture` varchar(255) NOT NULL,
  `progression` int NOT NULL DEFAULT '0',
  `email_adress` varchar(255) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `registration_date` datetime NOT NULL,
  `score` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users_finished_Questionnary`
--

DROP TABLE IF EXISTS `Users_finished_Questionnary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users_finished_Questionnary` (
  `Questionnary_id` int NOT NULL,
  `Users_id` int NOT NULL,
  PRIMARY KEY (`Questionnary_id`,`Users_id`),
  KEY `fk_Questionnary_has_Users_Users1_idx` (`Users_id`),
  KEY `fk_Questionnary_has_Users_Questionnary1_idx` (`Questionnary_id`),
  CONSTRAINT `fk_Questionnary_has_Users_Questionnary1` FOREIGN KEY (`Questionnary_id`) REFERENCES `Questionnary` (`id`),
  CONSTRAINT `fk_Questionnary_has_Users_Users1` FOREIGN KEY (`Users_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_finished_Questionnary`
--

LOCK TABLES `Users_finished_Questionnary` WRITE;
/*!40000 ALTER TABLE `Users_finished_Questionnary` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users_finished_Questionnary` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25 12:50:27
