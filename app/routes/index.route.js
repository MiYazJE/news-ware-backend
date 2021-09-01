const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

module.exports = ({ NewsRoutes }) => {
  const router = express.Router()
  const apiRoutes = express.Router()

  router
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(helmet())
    .use(compression())
    .use(morgan('tiny'))

  apiRoutes.use('/news', NewsRoutes)
  router.use('/api', [apiRoutes])

  return router
}
