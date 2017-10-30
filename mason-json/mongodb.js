module.exports = {
    name: 'mongodb',
    image: 'mongodb',
    type: 'service',
    volumes: {
        './storage/data/mongodb':'/data/db'
    },
    ports: ["27017:27017"],
}