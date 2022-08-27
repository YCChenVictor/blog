---
layout: post
title: basic usage
description: ''
date: '2022-08-12'
categories: mysql
note: 針對 what 的部分，我想要想一個設計的實例來做，儘量去找題目或是欣賞別人寫的 code
mathjax:
mermaid:
p5:
threeJS:
anchor:
publish: true
---

## Introduction

MySQL is a kind of SQL language for data manipulation in relational database.

* open the console of mysql
* create row, table, database
* read database, table
* update database, table
* delete row, table, database
* relations between tables
* settings of table

## Why?

(to be continued)

## How?

* console: `mysql -u root -p` and then enter password
* create:
  * row (details below): `INSERT INTO table_name(attributes...) VALUES(values...)`
  * table (details below): `CREATE TABLE desired_table_name ...`
  * database: `CREATE DATABASE desired_database_name`
* read:
  * list of databases: `SHOW DATABASES;`'
  * specific database: `USE database_name;`
  * list of tables: `SHOW TABLES;`
  * specific table: `SELECT * FROM users;`
* update
  * rename database
    * first approach (details below): create a new database -> move tables to new database -> remove the old database
    * second approach (details below): export and import with mysqldump
  * rename table: `RENAME TABLE tb1 TO tb2;`
  * transfer table: `CREATE TABLE destination_db.my_table SELECT * FROM source_db.my_table;`
* delete
  * database: `drop database <db_name>;`
  * table in database: `DROP TABLE "TABLE_NAME";`
  * row in table: `DELETE FROM ‘table_name’ WHERE id = 1 LIMIT 1`
* data type
  * integer types: [INTEGER, INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT](https://dev.mysql.com/doc/refman/8.0/en/integer-types.html)
  * NOT NULL: No empty value in this column
  * VARCHAR(255): Each cell in this column can include up to 255 characters
  * time related
    * DATE: reveal data in format, `'YYYY-MM-DD'` and range from `'1000-01-01'` to `'9999-12-31'`
    * DATETIME: reveal data in format, `'YYYY-MM-DD HH:MM:SS'` and range from `'1000-01-01 00:00:00'` to `'9999-12-31 23:59:59'`
    * TIMESTAMP: reveal data in format, `'YYYY-MM-DD HH:MM:SS'` and range of `'1970-01-01 00:00:01'` UTC to `'2038-01-19 03:14:07'` UTC
  * DECIMAL(M, D):
    * `M` means maximum number of digits (the precision) and has range from 1 to 65
    * `D` means number of digits to the right of the decimal point (the scale) and has a range of 0 to 30 and must be no larger than `M`
  * PRIMARY KEY: unique and not empty numberings to identify each record in a table
* relations
  * create (detail below): `FOREIGN KEY ... REFERENCES ...`
* settings
  * table: `DESCRIBE users;`

### insert row

example:

```bash
INSERT INTO timeseries_data_stocks(name, ticker, introduction) VALUES('S&P_500', '^GSPC', 'S&P 500 is a market-capitalization-weighted index of the 500 largest U.S. publicly traded companies by market value.')
```

### create table

example:

```bash
CREATE TABLE users(id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100), username VARCHAR(30), password VARCHAR(100), register_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
```

### rename database

#### first approach

```bash
CREATE DATABASE new_db_name;

RENAME TABLE db_name.table1 TO new_db_name.table1,  
db_name.table2 TO new_db_name.table2;

DROP DATABASE old_db_name;
```

#### second approach

```bash
# export database
mysqldump -u root -p pwd db_name > db_name_dump.sql
# create new database
mysqladmin -uroot -p pwd create new_db_name # or
mysql -uroot -p pwd -e “create database new_db_nme”
# import database
mysql -uroot -p pwd new_db_name < db_name_dump.sql
# drop old database
mysql -uroot -p pwd -e “DROP DATABASE db_name”
```

### setup relations

To let table, timeseries_data_prices, have relation with table, customers, upon creation,

```bash
CREATE TABLE timeseries_data_prices(
  customer_id INT,
  amount DOUBLE,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

## What?

Here give some pratical examples

### insert csv

create table -> load data -> security issue (error)

#### Create table with same column names of csv file

```bash
CREATE TABLE Nikkei_225 (
  id INT NOT NULL AUTO_INCREMENT,
  Date DATE NOT NULL, 
  Open DECIMAL(19, 4),
  High DECIMAL(19, 4),
  Low DECIMAL(19, 4),
  Close DECIMAL(19, 4), 
  Adj_Close DECIMAL(19, 4),
  PRIMARY KEY (id)
);
```

#### load csv data

```bash
LOAD DATA INFILE '/private/tmp/C.csv'
  INTO TABLE Nikkei_225
  FIELDS TERMINATED BY ','
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 ROWS;
```

* `FIELDS TERMINATED BY ','` means the method to separate each data in a row is by `,`
* `ENCLOSED BY '"'` means each data is warped by `"`
* `LINES TERMINATED BY '\n'` means the separating method between each line is \n, the regular expression representing change line
* `IGNORE 1 ROWS` means the process during import csv file will ignore the column names whose location is on first row



## Reference