-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema funcionarios
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema funcionarios
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `funcionarios` DEFAULT CHARACTER SET utf8mb4 ;
USE `funcionarios` ;

-- -----------------------------------------------------
-- Table `funcionarios`.`funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `funcionarios`.`funcionarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cargo` VARCHAR(45) NOT NULL,
  `salario` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `funcionarios`.`perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `funcionarios`.`perfil` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `funcionario_id` INT(11) NOT NULL,
  `idade` INT(11) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `funcionario_id` (`funcionario_id` ASC),
  CONSTRAINT `perfil_ibfk_1`
    FOREIGN KEY (`funcionario_id`)
    REFERENCES `funcionarios`.`funcionarios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
