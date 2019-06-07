module.exports = {
  name: 'laravel',
  default: ["php", "mariadb"],
  masonJson: {
    php: require('./mason-json/php.js'),
    mysql: require('./mason-json/mysql.js'),
    mariadb: require('./mason-json/mariadb.js'),
    mongodb: require('./mason-json/mongodb.js'),
    postgres: require('./mason-json/postgres.js'),
    postgis: require('./mason-json/postgis.js'),
  },
  hooks: [ // coming soon
    require('./hooks/laravel.js')
  ],
}