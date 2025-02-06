
import express from "express"
import { getMessege, sendMessege } from "../Controller/messegeController.js";
import protectRoute from "../Middleware/protectRoute.js";

const router=express.Router()

router.get("/:id",protectRoute,getMessege)
router.post("/send/:id",protectRoute,sendMessege)



export default router;