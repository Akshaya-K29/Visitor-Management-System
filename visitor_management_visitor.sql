-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: visitor_management
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `visitor`
--

DROP TABLE IF EXISTS `visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `id_proof_path` varchar(255) DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `visit_date` date DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `id_proof` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `host_name` varchar(255) DEFAULT NULL,
  `host_phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
INSERT INTO `visitor` VALUES (30,'sam14@gmail.com','9081564767','Admin','12345','ADMIN',NULL,NULL,'2026-07-01 13:51:29.000000','Office Management','APPROVED','HCL','2026-07-01',NULL,NULL,NULL,0,NULL,NULL,NULL),(31,'krithi@gmail.com','7822906543','Reception','12345','RECEPTION',NULL,NULL,'2026-07-01 13:51:29.000000','Visitor Handling','CHECKED_IN','TCS','2026-07-01',NULL,NULL,NULL,0,NULL,NULL,NULL),(32,'rosh123@gmail.com','6904123567','Employee','12345','EMPLOYEE',NULL,NULL,'2026-07-01 13:51:29.000000','Meeting','CHECKED_OUT','Infosys','2026-07-01',NULL,NULL,NULL,0,NULL,NULL,NULL),(33,'rahul@gmail.com','9876543210','Rahul Kumar','1234','EMPLOYEE',NULL,NULL,'2026-07-01 13:51:29.000000','Interview','PENDING','Wipro','2026-07-01',NULL,NULL,NULL,0,NULL,NULL,NULL),(34,'priya@gmail.com','8097563412','Priya Sharma','1234','RECEPTION',NULL,NULL,'2026-07-01 13:51:29.000000','Appointment','CHECKED_IN','Accenture','2026-07-01',NULL,NULL,NULL,0,NULL,NULL,NULL),(36,'admin@gmail.com','09042443170','Akshaya K','12345','VISITOR',NULL,NULL,NULL,'Other','PENDING','Zoho','2026-07-01',NULL,'','',NULL,NULL,'John','09940044654'),(40,'samsam@gmail.com','8899889999','Samy','12345','VISITOR',NULL,NULL,NULL,'Other','PENDING','DLF','2026-07-02',NULL,'Idproof 1.jpeg','photo 2.jpeg',NULL,NULL,'Aksh','0099889900'),(41,'akshaya123@gmail.com','09042443170','Akshaya K','12345','VISITOR',NULL,NULL,NULL,'Meeting','PENDING','Infosys','2026-07-03',NULL,'Idproof 1.jpeg','Photo 1.jpeg',NULL,NULL,'Maria','0099889900'),(43,'akshaya123@gmail.com','09042443170','Akshaya K','1234','VISITOR',NULL,NULL,NULL,'Meeting','PENDING','Infosys','2026-07-03',NULL,'Idproof 1.jpeg','photo 2.jpeg',NULL,NULL,'Maria','0099889900');
/*!40000 ALTER TABLE `visitor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-06 14:46:16
