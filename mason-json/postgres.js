module.exports = {
    name: 'postgres',
    image: 'postgres',
    type: 'service',
    volumes: {
        './storage/data/postgres':'/var/lib/postgresql'
    },
    ports: ["5432:5432"],
    environment: {
        'POSTGRES_DB': 'demo',
        'POSTGRES_USER': 'demo',
        'POSTGRES_PASSWORD': 'secret',
    }
}