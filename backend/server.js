require('dotenv').config()

const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

const app = express()
const corsOrigin = process.env.CORS_ORIGIN || '*'

app.use(cors({ origin: corsOrigin }))
app.use(express.json())

app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'fuzzy-radar-backend' })
})

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: corsOrigin,
  },
})

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`)
  })
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`)
})
