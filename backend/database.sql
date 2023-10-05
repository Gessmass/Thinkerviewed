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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Answers`
--

LOCK TABLES `Answers` WRITE;
/*!40000 ALTER TABLE `Answers` DISABLE KEYS */;
INSERT INTO `Answers` VALUES (1,'L\'énergie solaire',0,1),(2,'La combustion des combustibles fossiles',1,1),(3,'Les éoliennes',0,1),(4,'Les marrées',0,1),(5,'Les éclipses solaires',0,2),(6,'Les tremblements de terre',0,2),(7,'Les ouragans',1,2),(8,'Les éruptions volcaniques',0,2),(9,'L\'Amérique du Nord',0,3),(10,'L\'Europe',0,3),(11,'L\'Afrique',1,3),(12,'L\'Asie',0,3),(13,'L\'industrie du jeu vidéo',0,4),(14,'L\'industrie de la mode',0,4),(15,'L\'industrie alimentaire',0,4),(16,'L\'industrie de l\'énergie',1,4);
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
  `title` varchar(255) NOT NULL,
  `video_link` varchar(300) NOT NULL,
  `categorie` set('Energie','Sciences','Societe','Medias','Terrorisme','Environnement','Economie et Finance','Geopolitique','Internet et Technologie') NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `protagonist` varchar(45) NOT NULL,
  `miniature` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questionnary`
--

LOCK TABLES `Questionnary` WRITE;
/*!40000 ALTER TABLE `Questionnary` DISABLE KEYS */;
INSERT INTO `Questionnary` VALUES (1,'Effondrement: notre civilisation au bord du gouffre ?','https://www.youtube.com/embed/FkiMqLD3_YQ?si=uMBYX_st-xCSPsGt','Energie,Environnement','environnement, aurore, stefant, effondrement, civilisation, gouffre, mines, minerais, géologie, risques','Aurore Stéfant','assets/images/QuizzThumbnails/AuroreStefant_Effondrement.png'),(2,'Déconsommateurs : le cache-misère des gouvernements ?','https://www.youtube.com/embed/DfFohLBPh2Y?si=hXi74xFEjneIShJ6','Energie,Environnement','environnement, energie, jean, jarc, jancovici, climat, gouvernement, shift, projetct, ingenieur','Jean-Marc Jancovici','assets/images/QuizzThumbnails/JeanMarcJancovici_Déconsommateurs.jpeg'),(3,'La guerre des intelligences','https://www.youtube.com/embed/D3hR6nMZHG8?si=7z_HN7-VDUCxnueb','Energie,Societe,Internet et Technologie','laurent, alexandre, energie, societe, internet, guerre, des, intelligences, technophile','Laurent Alexandre','assets/images/QuizzThumbnails/LaurentAlexandre_GuerreDesIntelligences.jpeg'),(4,'Stratège de guerre : Sabotages, Cupidité et Agressions ?','https://www.youtube.com/embed/V5rrujhVFU0?si=JYR_wmk1qhHV2Cy0','Energie,Societe,Geopolitique','jerome, clech, stratege, de, guerre, sabotages, cupidite, agressions, strategie, energie, climat, geopolitique','Jérôme Clech','assets/images/QuizzThumbnails/JeromeClech_StrategeDeGuerre.jpeg');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questions`
--

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;
INSERT INTO `Questions` VALUES (1,'Quelle est la principale source de gaz à effet de serre ?','1:20:20','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio quam. Ut non congue risus, nec condimentum nulla. Aenean ac feugiat neque, quis tincidunt lacus. Integer semper lectus vitae interdum sagittis. Aliquam nec aliquet non.','pending',2),(2,'Quel phénomène naturel est exacerbé par le changement climatique ?','1:30:40','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio quam. Ut non congue risus, nec condimentum nulla. Aenean ac feugiat neque, quis tincidunt lacus. Integer semper lectus vitae interdum sagittis. Aliquam nec aliquet non.','pending',2),(3,'Quel continent est le plus affecté par le changement climatique ?\nQuel continent est le plus affecté par le changement climatique ?\n','1:20:34','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio quam. Ut non congue risus, nec condimentum nulla. Aenean ac feugiat neque, quis tincidunt lacus. Integer semper lectus vitae interdum sagittis. Aliquam nec aliquet non.','pending',1),(4,'Quelle industrie est la plus grande émettrice de gaz à effet de serre ?','1:20:34','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio quam. Ut non congue risus, nec condimentum nulla. Aenean ac feugiat neque, quis tincidunt lacus. Integer semper lectus vitae interdum sagittis. Aliquam nec aliquet non.','pending',1);
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
  `profil_picture` varchar(255) NOT NULL DEFAULT 'assets/images/testUserPic.jpg',
  `progression` int NOT NULL DEFAULT '0',
  `email_adress` varchar(255) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `registration_date` datetime NOT NULL,
  `score` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Romain','assets/images/testUserPic.jpg',0,'rom@gitan.com','$argon2id$v=19$m=65536,t=5,p=1$wKFf+lyxo60LYWNuHc9sow$aJJGP3oooUzvpXhQt1aMPEJoB7maL37wge0V+sUNi3A','2023-09-26 16:34:15',0),(2,'Gessmass','assets/images/testUserPic.jpg',0,'justrideforlife@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$M1jrdyguiICAHwaH6VgYbQ$NI1dFLQ4UyYNHWTlhxLEbG7a/LUXLj6L8RGOPiwH0x8','2023-09-27 14:00:16',0);
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

-- Dump completed on 2023-10-02 14:38:26
