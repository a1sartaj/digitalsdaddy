import { Router } from "express";
import mailController from "./mail.controller.js";


const router = Router()

router.post("/send", mailController.sendMail)

export default router;