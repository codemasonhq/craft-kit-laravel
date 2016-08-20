module.exports = {
    name: 'php', 
    image: 'codemasonhq/php',
    type: 'instance',
    volumes: {
        './':'/app',
    },
    ports: [
        "80:80",
        "443:443"
    ],
}