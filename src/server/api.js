import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  return res.send('working')
})

export default router