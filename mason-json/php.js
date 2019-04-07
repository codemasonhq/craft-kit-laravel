module.exports = {
  name: 'web', 
  build: '.',
  base: 'codemasonhq/php', 
  type: 'service',
  volumes: {
    './':'/app',
  },
  ports: [
    "80:80",
  ],
}