import { Router } from "express";
import todoRoute from "./todo.route.js"


const router = Router()

router.use("/todo", todoRoute)


export default router