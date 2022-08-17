import { Router, Request, Response } from 'express'

interface IUva {
  name:string
}

const routes = Router()

routes.get('/', (request: Request, response: Response<IUva>) => {
  return response.json({

    name: 'uva'
  })
})

export default routes
