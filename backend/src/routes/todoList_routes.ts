import express from "express";
import * as TodosController from "../controllers/controllers";

//Выносим роутинг в отдельный файл для чистоты кода
const router = express.Router();

router.get("/", TodosController.getTodos)

router.get("/:id", TodosController.getTodoById)

router.post('/', TodosController.createTodo)

router.patch('/:id', TodosController.updateTodo)

router.delete('/:id', TodosController.deleteTodo)

export default router;
