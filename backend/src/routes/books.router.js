import { Router } from 'express'
import {
  health,
  infoAPI,
  ping,
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from '../controllers/books.controller'

export const router = Router()

router.get('/', infoAPI)

router.get('/ping', ping)

router.get('/health', health)

router.get('/api/livros', getBooks)

router.get('/api/livros/:id', getBookById)

router.post('/api/livros', createBook)

router.patch('/api/livros/:id', updateBook)

router.delete('/api/livros/:id', deleteBook)
