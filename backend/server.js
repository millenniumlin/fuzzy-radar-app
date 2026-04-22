require('dotenv').config()

const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

const app = express()

const DEFAULT_DEV_FRONTEND_ORIGIN = 'http://localhost:5173'
const DEFAULT_ORIGINS = [DEFAULT_DEV_FRONTEND_ORIGIN]
const envOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const allowedOrigins = (envOrigins.length > 0 ? envOrigins : DEFAULT_ORIGINS).filter((origin) => {
  try {
    const parsed = new URL(origin)
    return (parsed.protocol === 'http:' || parsed.protocol === 'https:') && parsed.host.length > 0
  } catch {
    return false
  }
})

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error('Not allowed by CORS'))
  },
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'fuzzy-radar-backend' })
})

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
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
