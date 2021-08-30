const express = require('express')
require('dotenv').config()

class Server {
  constructor({ config, router }) {
    this.config = config
    this.express = express()
    this.express.use(router)
  }

  start() {
    this.server =
      this.express
        .listen(this.config.PORT,
          () => console.log(`MAGIC at port ${this.config.PORT}`))
  }
}

module.exports = Server
