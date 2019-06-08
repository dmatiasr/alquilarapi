const Sequelize = require('sequelize');

const dbconf = {
    'engine': 'postgres',
    'pguser':'admin',
    'pgpass':'admin',
    'host' : 'localhost',
    'port':'5432',
    'dbname':'alquilergis'
};

const pgconn = dbconf['engine']+'://'+dbconf['pguser']+':'+dbconf['pgpass']+'@'+dbconf['host']+':'+dbconf['port']+'/'+dbconf['dbname']


const sequelize = new Sequelize(pgconn);

module.exports = Sequelize;



/* 
CREATE DATABASE alquilergis;
GRANT ALL PRIVILEGES ON DATABASE alquilergis TO admin;

--admin pguser supposed created


Tables Documentation
CREATE TABLE property(
    key INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(300) UNIQUE,
    type VARCHAR(50),
    description VARCHAR(3000),
    lat VARCHAR(100),
    lon VARCHAR(100),
    location_gis geometry(Point,4326)
);
*/