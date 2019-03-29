/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.customers_table + '` ( \
    `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `email` VARCHAR(20) NOT NULL, \
    `firstName` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`idx`), \
    `bonusPoints` INT UNSIGNED NOT NULL, \
    `memberSince` CHAR(60) NOT NULL, \
    UNIQUE INDEX `idx_UNIQUE` (`idx` ASC), \
    UNIQUE INDEX `email_UNIQUE` (`email` ASC) \
)');

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.employees_table + '` ( \
    `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `privateEmail` VARCHAR(20) NOT NULL, \
    `workEmail` VARCHAR(20) NOT NULL, \
    `icon` VARCHAR(20) NOT NULL, \
    `firstName` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`idx`), \
    `store` CHAR(60) NOT NULL, \
    `employeeSince` CHAR(60) NOT NULL, \
    UNIQUE INDEX `idx_UNIQUE` (`idx` ASC), \
    UNIQUE INDEX `workEmail_UNIQUE` (`workEmail` ASC) \
)');

console.log('Success: Database Created!')

connection.end();
