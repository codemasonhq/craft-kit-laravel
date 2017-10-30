module.exports = {
    name: 'postgis',
    image: 'mdillon/postgis',
    type: 'service',
    volumes: {
        './storage/data/postgis':'/var/lib/postgresql'
    },
    ports: ["5432:5432"],
    environment: {
        'POSTGRES_DB': 'demo',
        'POSTGRES_USER': 'demo',
        'POSTGRES_PASSWORD': 'secret',
    }
}