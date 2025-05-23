import Conversation from "../Models/conversationModel.js"
import Message from "../Models/messageModel.js"
import { getReceiverSocketId, io } from "../Socket/socket.js"

export const sendMessage  =  async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if (newMessage) {
            conversation.message.push(newMessage._id)
        }
        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            // io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }




        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMesssge controller", error.message)
        res.status(500).json({ error: "Internal server error" })

    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("message")
        if (!conversation) return res.status(200).json([])
        const message = conversation.message
        res.status(200).json(message)

    } catch (error) {
        console.log("Error in getMesssge Controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}