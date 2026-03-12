process.loadEnvFile()

import { Router } from 'express'
import OpenAI from 'openai'

export const aiRouter = Router()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

aiRouter.get()