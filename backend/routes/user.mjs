import express from 'express'
const router = express.Router()

import{register} from "../src/api/auth/register.mjs"
router.post('/register', register)

import login from "../src/api/auth/login.mjs"
router.post('/login',login)

export default router;