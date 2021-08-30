const mongoose = require('mongoose')

const dbConfig = {
  url: process.env.URL_MONGO_DB || 'mongodb://localhost:27017/news-ware',
  properties: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}

const initializeMongoDB = () =>
  mongoose.connect(dbConfig.url, dbConfig.properties)
    .then(() => console.log('*** MongoDB UP ***'))
    .catch((e) => console.error(e.message))

module.exports = initializeMongoDB
