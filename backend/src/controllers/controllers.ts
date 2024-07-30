import {todoModel} from "../models/todo";
import {RequestHandler} from "express";
import {CreateTodoBody, UpdateParams, UpdateTodoBody} from "../types/types";
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
    const todoId = req.params.id

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

//Обязательно использовать дженерики, без них не работает обновление
export const updateTodo:RequestHandler<UpdateParams, unknown, UpdateTodoBody, unknown> = async (req, res, next) => {
    const todoId = req.params.id

    const newText = req.body.text

    try {
        if(!mongoose.isValidObjectId(todoId)) {
            throw createHttpError(400, "Invalid todo id")
        }
        if(!newText) {
            throw createHttpError(400, "Todo must have text!")
        }
        const todo = await todoModel.findById(todoId).exec()

        if(!todo) {
            throw createHttpError(404, "Todo not found here")
        }

        todo.text = newText

        const updatedTodo = await todo.save()
        res.status(200).json(updatedTodo)

    } catch (err) {
        next(err)
    }
}

export const deleteTodo:RequestHandler = async (req, res, next) => {
    const todoId = req.params.id
    try {
        if(!mongoose.isValidObjectId(todoId)) {
            throw createHttpError(400, "Invalid todo id")
        }

        const todo = await todoModel.findById(todoId).exec()

        if(!todo) {
            throw createHttpError(404, "Todo not found")
        }

        await todoModel.findByIdAndDelete(todoId).exec()
        res.sendStatus(204)

    } catch (err) {
        next(err)
    }
}


