
import express from "express";
import { login, logout, signup } from "../Controller/authController.js";

const router=express.Router()

router.get("/login",login)
router.get("/signup",signup)
router.get("/logout",logout)

export default router;