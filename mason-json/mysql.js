module.exports = {
    name: 'mysql',
    image: 'mysql',
    type: 'service',
    volumes: {
        './storage/data/mysql':'/var/lib/mysql'
    },
    ports: ["3306:3306"],
    environment: {
        'MYSQL_DATABASE': 'homestead',
        'MYSQL_USER': 'homestead',
        'MYSQL_PASSWORD': 'secret',
        'MYSQL_ROOT_PASSWORD': 'root'
    }
}