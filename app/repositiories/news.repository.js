const BaseRepository = require('./base.repository')

class NewsRepository extends BaseRepository {
  constructor({ News }) {
    super(News)
  }

  get() {
    return this.model.find().sort({ createdAt: 'desc' }).exec()
  }
}

module.exports = NewsRepository
