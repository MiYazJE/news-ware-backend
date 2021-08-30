const router = require('express').Router()
const express = require('express')

router.use(express.json())

module.exports = ({ NewsService }) => {
  router.get('/by-id/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      const items = await NewsService.getById(id)
      res.json(items)
    } catch (e) {
      res.status(e.status).json({ message: e.message })
    }
  })

  router.get('/', async (_, res) => {
    const item = await NewsService.get()
    res.json(item)
  })

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
      await NewsService.delete(id)
      res.status(200).send()
    } catch (e) {
      res.status(e.status).json({ message: e.message })
    }
  })

  router.post('/', async (req, res) => {
    const { author, title, description, content } = req.body

    try {
      await NewsService.create({ author, title, description, content })
      res.status(200).send()
    } catch (e) {
      res.status(e.status).json({ message: e.message })
    }
  })

  router.patch('/setArchived/:id', async (req, res) => {
    const { id } = req.params
    const { isArchived } = req.body
    try {
      await NewsService.update(id, { isArchived })
      res.status(200).send()
    } catch (e) {
      res.status(e.status).json({ message: e.message })
    }
  })

  return router
}
