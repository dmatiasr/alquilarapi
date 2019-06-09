const Sequelize = require('sequelize');
const clevercloud = require('./clever-cloud.setting');


const dbconf = {
    'engine': 'postgres',
    'pguser': clevercloud['POSTGRESQL_ADDON_USER'],
    'pgpass':clevercloud['POSTGRESQL_ADDON_PASSWORD'],
    'host' : clevercloud['POSTGRESQL_ADDON_HOST'],
    'port': clevercloud['POSTGRESQL_ADDON_PORT'],
    'dbname':clevercloud['POSTGRESQL_ADDON_DB']
};

const pgconn = dbconf['engine']+'://'+dbconf['pguser']+':'+dbconf['pgpass']+'@'+dbconf['host']+':'+dbconf['port']+'/'+dbconf['dbname']


const sequelize = new Sequelize(pgconn);

module.exports = sequelize;