import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
app.use(cors())

const server = createServer(app)

const io = new Server(server, {
    cors: 'http://localhost:5173/',
    methods: ["GET", "POST"]
})

io.on("connection", (socket) => {
    console.log(`User ${socket.id} connected.`)
})

httpServer.listen(3001, () => {
    console.log("server running")
})