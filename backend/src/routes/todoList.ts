import express from "express";
import * as TodosController from "../controllers/controllers";
import {createTodo} from "../controllers/controllers";

const router = express.Router();

router.get("/", TodosController.getTodos)

router.get("/:id", TodosController.getTodoById)

router.post('/', createTodo)

export default router;
