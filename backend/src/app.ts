import express, {Response, Request, NextFunction} from "express"
import 'dotenv/config'
import todosRoutes from './routes/todoList'
import morgan from 'morgan'
import createHttpError, {isHttpError} from "http-errors";

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/todos', todosRoutes)

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"))
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    let errMessage = 'An unknown error occurred'
    let statusCode = 500

    if(isHttpError(err)) {
        statusCode = err.status
        errMessage = err.message
    }
    res.status(statusCode).json({error: errMessage})
})

export default app
