import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { router } from './routes/router.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(router)

const port = process.env.PORT || 7000

if (!port) {
    throw new Error('Porta não definida')
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
