const env = require('./helpers/env');

module.exports = {
  client: 'mysql',
  connection: {
    host: env('DB_HOST', '127.0.0.1'),
    user: env('DB_USER', 'root'),
    password: env('DB_PASSWORD'),
    database: env('DB_DATABASE'),
  },
};
