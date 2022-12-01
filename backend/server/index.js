import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from '../routes/index.js'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

//PORT
const PORT = 8888

// CREATE APP
const app = express()

// MIDDLEWAREs
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(logger('dev'))
app.use(cookieParser())

// ROUTES
app.use(routes)

app.use(function (req, res, next) {
  const error = new Error('Please check the route again')
  //res.json("")
  error.status = 404
  next(error.message)
})
app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}/api/v1`),
)
