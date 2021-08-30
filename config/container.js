const { createContainer, asClass, asValue, asFunction } = require('awilix')
const Routes = require('../app/routes/index.route')
const NewsService = require('../app/services/news.service')
const NewsRepository = require('../app/repositiories/news.repository')
const News = require('../app/models/news.model')
const NewsRoutes = require('../app/routes/news.route')
const app = require('../server')
const config = require('./index')

const container = createContainer()

container
  .register({
    router: asFunction(Routes).singleton(),
    app: asClass(app).singleton(),
    config: asValue(config)
  })
  .register({
    NewsRoutes: asFunction(NewsRoutes).singleton(),
    NewsService: asClass(NewsService).singleton(),
    NewsRepository: asClass(NewsRepository).singleton(),
    News: asValue(News)
  })

module.exports = container
