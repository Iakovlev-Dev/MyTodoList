import express from "express";
import * as TodosController from "../controllers/controllers";
import {postTodosList} from "../controllers/controllers";

const router = express.Router();

router.get("/", TodosController.getTodos)

router.get("/:id", TodosController.getTodoById)

router.post('/', postTodosList)

export default router;
