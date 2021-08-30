class BaseRepository {
  constructor(model) {
    this.model = model
  }

  get() {
    return this.model.find()
  }

  getById(id) {
    return this.model.findById(id)
  }

  create(entity) {
    return this.model.create(entity)
  }

  update(id, entity) {
    return this.model.findByIdAndUpdate(id, entity)
  }

  delete(id) {
    return this.model.findByIdAndDelete(id)
  }
}

module.exports = BaseRepository
