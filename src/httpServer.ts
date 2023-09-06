import express, { Express } from 'express'
import bodyParser from 'body-parser'

import { postRouter } from './components/post/apiRoutes'

const app: Express = express()
const port = 3131

app.use(bodyParser.json())
app.use(postRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
