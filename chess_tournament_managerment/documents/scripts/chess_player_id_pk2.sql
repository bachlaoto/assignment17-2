-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema chess_tournament
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chess_tournament
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chess_tournament` DEFAULT CHARACTER SET utf8 ;
USE `chess_tournament` ;

-- -----------------------------------------------------
-- Table `chess_tournament`.`list_of_sponsors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`list_of_sponsors` (
  `sponsor_id` INT(11) NOT NULL AUTO_INCREMENT,
  `sponsor_name` VARCHAR(255) NOT NULL,
  `sponsor_phone` VARCHAR(255) NOT NULL,
  `other_sponsor_details` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`sponsor_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`chess_clubs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`chess_clubs` (
  `club_id` INT(11) NOT NULL AUTO_INCREMENT,
  `club_name` VARCHAR(255) NOT NULL,
  `club_address` VARCHAR(255) NOT NULL,
  `other_club_details` VARCHAR(255) NOT NULL,
  `organizer_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`club_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`tournament_organizers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`tournament_organizers` (
  `organizer_name` VARCHAR(255) NOT NULL,
  `organizer_details` VARCHAR(255) NOT NULL,
  `organizer_id` VARCHAR(255) NOT NULL,
  `club_id` INT(11) NOT NULL,
  PRIMARY KEY (`organizer_id`),
  INDEX `fk_tournament_organizers_chess_clubs1_idx` (`club_id` ASC),
  CONSTRAINT `fk_tournament_organizers_chess_clubs1`
    FOREIGN KEY (`club_id`)
    REFERENCES `chess_tournament`.`chess_clubs` (`club_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`tournaments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`tournaments` (
  `tournament_id` INT(11) NOT NULL AUTO_INCREMENT,
  `tournament_start_date` DATE NOT NULL,
  `tournament_end_date` DATE NOT NULL,
  `tournament_name` VARCHAR(255) NOT NULL,
  `tournament_details` VARCHAR(255) NOT NULL,
  `organizer_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`tournament_id`),
  INDEX `fk_tournaments_tournament_organizers1_idx` (`organizer_id` ASC),
  CONSTRAINT `fk_tournaments_tournament_organizers1`
    FOREIGN KEY (`organizer_id`)
    REFERENCES `chess_tournament`.`tournament_organizers` (`organizer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`actual_tournament_sponsors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`actual_tournament_sponsors` (
  `sponsor_id` INT(11) NOT NULL,
  `tournaments_id` INT(11) NOT NULL,
  PRIMARY KEY (`sponsor_id`, `tournaments_id`),
  INDEX `fk_actual_tournament_sponsors_list_of_sponsors1_idx` (`sponsor_id` ASC),
  INDEX `fk_actual_tournament_sponsors_tournaments1_idx` (`tournaments_id` ASC),
  CONSTRAINT `fk_actual_tournament_sponsors_list_of_sponsors1`
    FOREIGN KEY (`sponsor_id`)
    REFERENCES `chess_tournament`.`list_of_sponsors` (`sponsor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_actual_tournament_sponsors_tournaments1`
    FOREIGN KEY (`tournaments_id`)
    REFERENCES `chess_tournament`.`tournaments` (`tournament_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`ref_ranking_codes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`ref_ranking_codes` (
  `ranking_code` INT(11) NOT NULL AUTO_INCREMENT,
  `ranking_description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ranking_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`players`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`players` (
  `player_id` INT(11) NOT NULL AUTO_INCREMENT,
  `club_id` INT(11) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(255) NOT NULL,
  `email_address` VARCHAR(255) NOT NULL,
  `other_player_details` VARCHAR(255) NOT NULL,
  `ranking_code` INT(11) NOT NULL,
  PRIMARY KEY (`player_id`),
  INDEX `fk_players_chess_clubs1_idx` (`club_id` ASC),
  INDEX `fk_players_ref_ranking_codes1_idx` (`ranking_code` ASC),
  CONSTRAINT `fk_players_chess_clubs1`
    FOREIGN KEY (`club_id`)
    REFERENCES `chess_tournament`.`chess_clubs` (`club_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_players_ref_ranking_codes1`
    FOREIGN KEY (`ranking_code`)
    REFERENCES `chess_tournament`.`ref_ranking_codes` (`ranking_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`player_tournament_participation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`player_tournament_participation` (
  `final_result` VARCHAR(255) NOT NULL,
  `player_id` INT(11) NOT NULL,
  `tournament_id` INT(11) NOT NULL,
  PRIMARY KEY (`player_id`, `tournament_id`),
  INDEX `fk_player_tournament_participation_players1_idx` (`player_id` ASC),
  INDEX `fk_player_tournament_participation_tournaments1_idx` (`tournament_id` ASC),
  CONSTRAINT `fk_player_tournament_participation_players1`
    FOREIGN KEY (`player_id`)
    REFERENCES `chess_tournament`.`players` (`player_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_player_tournament_participation_tournaments1`
    FOREIGN KEY (`tournament_id`)
    REFERENCES `chess_tournament`.`tournaments` (`tournament_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`ref_result_codes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`ref_result_codes` (
  `result_code` INT(11) NOT NULL AUTO_INCREMENT,
  `result_description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`result_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `chess_tournament`.`matches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chess_tournament`.`matches` (
  `match_star_datetime` DATETIME NOT NULL,
  `result_code` INT(11) NOT NULL,
  `match_end_datetime` DATETIME NOT NULL,
  `player_id_1` INT(11) NOT NULL,
  `tournament_id` INT(11) NOT NULL,
  `player_id_2` INT(11) NOT NULL,
  PRIMARY KEY (`player_id_1`, `tournament_id`, `match_star_datetime`, `player_id_2`),
  INDEX `fk_matches_ref_result_codes_idx` (`result_code` ASC),
  INDEX `fk_matches_player_tournament_participation1_idx` (`player_id_1` ASC, `tournament_id` ASC),
  CONSTRAINT `fk_matches_player_tournament_participation1`
    FOREIGN KEY (`player_id_1` , `tournament_id`)
    REFERENCES `chess_tournament`.`player_tournament_participation` (`player_id` , `tournament_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matches_ref_result_codes`
    FOREIGN KEY (`result_code`)
    REFERENCES `chess_tournament`.`ref_result_codes` (`result_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
