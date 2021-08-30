const createError = require('../utils/createError')

class BaseService {
  constructor(repository) {
    this.repository = repository
  }

  async getById(id) {
    if (!id) {
      throw createError({ message: 'Id parameter is required', status: 400 })
    }

    return this.repository.getById(id)
  }

  async get() {
    return this.repository.get()
  }

  async delete(id) {
    if (!id) {
      throw createError({ message: 'Id parameter is required', status: 400 })
    }

    return this.repository.delete(id)
  }
}

module.exports = BaseService
