
import express from "express"
import protectRoute from "../Middleware/protectRoute.js";
import { getUserFromSidebar } from "../Controller/userController.js";

const router=express.Router()


router.get("/",protectRoute,getUserFromSidebar)



export default router;