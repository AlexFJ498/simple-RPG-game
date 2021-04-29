-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE DATABASE "rpg_game" ------------------------------
CREATE DATABASE IF NOT EXISTS `rpg_game` CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `rpg_game`;
-- ---------------------------------------------------------


-- CREATE TABLE "enemies" --------------------------------------
CREATE TABLE `enemies`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`image` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`health` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`mana` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`strength` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`agility` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`speed` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY ( `id` ),
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "players" --------------------------------------
CREATE TABLE `players`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`description` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`image` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`health` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`mana` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`strength` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`agility` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`speed` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY ( `id` ),
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 5;
-- -------------------------------------------------------------


-- Dump data of "enemies" ----------------------------------
BEGIN;

INSERT INTO `enemies`(`id`,`name`,`image`,`health`,`mana`,`strength`,`agility`,`speed`) VALUES 
( '1', 'Troll', 'img/avatar-enemies/troll.png', '200', '0', '150', '80', '150' ),
( '2', 'Goblin', 'img/avatar-enemies/goblin.png', '100', '0', '50', '100', '100' );
COMMIT;
-- ---------------------------------------------------------


-- Dump data of "players" ----------------------------------
BEGIN;

INSERT INTO `players`(`id`,`name`,`description`,`image`,`health`,`mana`,`strength`,`agility`,`speed`) VALUES 
( '1', 'Cazador', 'Los cazadores son luchadores muy completos que se especializan en la lucha a distancia. Sin fuerza o debilidad extra.', 'img/avatar-player/cazador.png', '200', '0', '50', '200', '100' ),
( '2', 'Orco', 'Los orcos son muy rápidos y tienen mucha resistencia y velocidad, lo que contrasta con una fuerza y vida bajas.', 'img/avatar-player/orco.png', '100', '0', '100', '150', '200' ),
( '3', 'Guerrero', 'Los guerreros tienen una gran cantidad de vida y resistencia. Sin embargo, su gran fuerza los hace muy lentos y torpes.', 'img/avatar-player/guerrero.png', '200', '0', '200', '100', '50' ),
( '4', 'Mago', 'Los magos son seres superiores que unen todo su esfuerzo en lanzar sus hechizos. Tienen un poder descomunal, a cambio de una vida muy baja.', 'img/avatar-player/mago.png', '70', '100', '150', '150', '100' );
COMMIT;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


