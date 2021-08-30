const initializeMongoDB = require('./database')
const container = require('./config/container')
const server = container.resolve('app')

initializeMongoDB().then(() => server.start())
