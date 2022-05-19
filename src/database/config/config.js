require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "976431",
    "database": "todo_list",
    "host": "172.17.0.2",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "976431",
    "database": "todo_list",
    "host": "172.17.0.2",
    "dialect": "mysql"
  }
}
