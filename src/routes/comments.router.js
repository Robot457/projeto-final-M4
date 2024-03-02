import { Router } from 'express'
import {
  createComment,
  deleteComment,
  getComment,
  getCommentsByBook,
  getCommentsByUser,
  updateComment,
} from '../controllers/comments.controller'

export const router = Router()

router.get('/api/comentarios/:id', getComment)

router.get('/api/comentarios/livro/:bookId', getCommentsByBook)

router.get('/api/comentarios/usuario/:userId', getCommentsByUser)

router.post('/api/comentarios', createComment)

router.patch('/api/comentarios/:id', updateComment)

router.delete('/api/comentarios/:id', deleteComment)
