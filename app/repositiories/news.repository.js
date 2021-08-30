const BaseRepository = require('./base.repository')

class NewsRepository extends BaseRepository {
  constructor({ News }) {
    super(News)
  }
}

module.exports = NewsRepository
