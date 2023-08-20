import { Router } from 'express';
import { addTask, deleteTask, getTask, updateTask } from "../controllers/todo.controller.js";



const router = Router()

router.post("/", addTask)
router.get("/", getTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

export default router