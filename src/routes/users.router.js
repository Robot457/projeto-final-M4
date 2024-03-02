import { Router } from 'express'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../controllers/users.controller'

export const router = Router()

router.get('/api/usuarios', getAllUsers)

router.get('/api/usuarios/:id', getUser)

router.post('/api/usuarios', createUser)

router.patch('/api/usuarios/:id', updateUser)

router.delete('/api/usuarios/:id', deleteUser)
