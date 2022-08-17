import routes from './routes'
import express from 'express'

class App {
  app: express.Application
  constructor () {
    this.app = express()
    this.middlewares()
    this.router()
  }

  middlewares () {
    this.app.use(express.json())
  }

  router () {
    this.app.use(routes)
  }
}

export default new App().app
