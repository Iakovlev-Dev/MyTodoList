import express, {Response, Request, NextFunction} from "express"
import 'dotenv/config'
import todosRoutes from './routes/todoList'
import morgan from 'morgan'

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/todos', todosRoutes)

app.use((req, res, next) => {
    next(Error('not found'))
})

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err)
    let errMessage = 'An unknown error occurred'
    if (err instanceof Error) errMessage = err.message
    res.status(500).json({error: errMessage})
})

export default app
