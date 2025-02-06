import Conversation from "../Models/conversationModel.js"
import Messege from "../Models/messegeModel.js"

export const sendMessege = async (req, res) => {
    try {
        const { messege } = req.body
        const { id: receicerId } = req.params
        const senderId = req.user._id
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receicerId] }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receicerId],
            })
        }
        const newMessege = new Messege({
            senderId,
            recevierId,
            messege,
        })
        if (newMessege) {
            conversation.messege.push(newMessege._id)
        }
        await Promise.all([conversation.save(), newMessege.save()])
        res.status(201).json(newMessege)
    } catch (error) {
        console.log("Error in sendMesssge controller", error.messege)
        res.status(500).json({ error: "Internal server error" })

    }
}

export const getMessege = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messege")
        if (!conversation) return res.status(200).json([])
        const messege = conversation.messege
        res.status(200).json(messege)

    } catch (error) {
        console.log("Error in getMesssge Controller", error.messege)
        res.status(500).json({ error: "Internal server error" })
    }
}