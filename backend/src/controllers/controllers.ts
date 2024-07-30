import {todoModel} from "../models/todo";
import {RequestHandler} from "express";
import {CreateTodoBody} from "../types/types";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getTodos:RequestHandler = async (req, res, next) => {
    try{
        const todo = await todoModel.find().exec()
        res.status(200).json(todo)
    } catch (err) {
        next(err)
    }
}

export const getTodoById:RequestHandler = async (req, res, next) => {
    const todoId = req.params.todoId

    try{
        if(!mongoose.isValidObjectId(todoId)) {
            throw createHttpError(400, "Invalid todo id")
        }
        const todo = await todoModel.findById(todoId).exec()
        if(!todo) {
            throw createHttpError(404, "Todo not found")
        }
        res.status(200).json(todo)
    } catch (err) {
        next(err)
    }
}

export const createTodo:RequestHandler<unknown, unknown, CreateTodoBody, unknown> = async (req, res, next) => {
    const text = req.body.text
    try{
        if(!text) {
            throw createHttpError(400, "Todo must have text!")
        }
        const newTodo = await todoModel.create({
            text: text,
        })
        res.status(201).json(newTodo)
    } catch (err) {
        next(err)
    }
}
