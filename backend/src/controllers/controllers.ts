import {todoModel} from "../models/todo";
import {RequestHandler} from "express";

export const getTodos:RequestHandler = async (req, res, next) => {
    try{
        // throw Error('ERORO')
        const todo = await todoModel.find().exec()
        res.status(200).json(todo)
    } catch (err) {
        next(err)
    }
}

export const getTodoById:RequestHandler = async (req, res, next) => {
    try{
        const todo = await todoModel.findById(req.params.id)
        res.status(200).json(todo)
    } catch (err) {
        next(err)
    }
}

export const postTodosList:RequestHandler = async (req, res, next) => {
    const text = req.body.text
    try{
        const newTodo = await todoModel.create({
            text: text,
        })
        res.status(201).json(newTodo)
    } catch (err) {
        next(err)
    }
}
