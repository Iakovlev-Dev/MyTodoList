import express, {Response, Request, NextFunction} from "express"
import 'dotenv/config'
import {todoModel} from "./models/todo";

const app = express()

app.get("/", async (req, res, next) => {
    try{
        // throw Error('ERORO')
        const todo = await todoModel.find().exec()
        res.status(200).json(todo)
    } catch (err) {
        next(err)
    }
})

app.use((req, res, next) => {
    next(Error('not found'))
})

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    let errMessage = 'An unknown error occured'
    if (err instanceof Error) errMessage = err.message
    res.status(500).json({error: errMessage})
})

export default app
