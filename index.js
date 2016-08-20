module.exports = {
  name: 'laravel',
  default: ["php", "mysql"],
  masonJson: {
  	php: require('./mason-json/php.js'),
  	mysql: require('./mason-json/mysql.js')
  },
  hooks: [ // coming soon
  	require('./hooks/laravel.js')
  ]
}