const createError = require('../utils/createError')
const BaseService = require('./base.service')

class NewsService extends BaseService {
  constructor({ NewsRepository }) {
    super(NewsRepository)
  }

  update(id, changes) {
    if (!id) {
      throw createError({ message: 'Id parameter is required', status: 400 })
    }

    return this.repository.update(id, changes)
  }

  create({ author, title, description, content }) {
    const errors = []
    if (!author) errors.push('Author is required')
    if (!title) errors.push('Title is required')
    if (!content) errors.push('Content is required')

    if (errors.length) {
      throw createError({
        message: errors,
        status: 400
      })
    }

    return this.repository.create({
      author,
      title,
      description,
      content,
      isArchived: false,
      date: new Date()
    })
  }
}

module.exports = NewsService
