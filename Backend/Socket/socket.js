
import { Server } from "socket.io";
import http from 'http'
import express from 'express'

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})

export const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId] || null
}

const userSocketMap = {}


io.on('connection', (socket) => {
    console.log("user connected", socket.id)

    const userId = socket.handshake.query.userId;

    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id
    }

    // io.emit() is used to send event to all connect clint
    io.emit("getOnlineUser", Object.keys(userSocketMap))


    // socket.on() is used to listen to the event. can we used both client and server side.
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id)
        delete userSocketMap[userId];
        io.emit('getOnlineUser', Object.keys(userSocketMap))
    })
})



export { app, io, server }