import { Router } from 'express'
import { health, infoAPI, ping } from '../controllers/controller'

export const router = Router()

router.get('/', infoAPI)

router.get('/ping', ping)

router.get('/health', health)
