import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { router as booksRouter } from './routes/books.router.js'
import { router as usersRouter } from './routes/users.router.js'
import { router as commentsRouter } from './routes/comments.router.js'
import { createGenres, createBooks } from './database/scripts.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(booksRouter)
app.use(usersRouter)
app.use(commentsRouter)

const port = process.env.PORT || 7000

if (!port) {
  throw new Error('Porta não definida')
}

createGenres()
createBooks()

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
