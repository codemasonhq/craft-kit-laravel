module.exports = {
    name: 'app', 
    build: '.',
    base: 'codemasonhq/php', 
    type: 'service',
    volumes: {
        './':'/app',
    },
    ports: [
        "80:80",
        "443:443"
    ],
}