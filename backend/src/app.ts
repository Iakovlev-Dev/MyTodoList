import express, {Response, Request, NextFunction} from "express"
import 'dotenv/config'
import todosRoutes from './routes/todoList_routes'
import morgan from 'morgan'
import cors from 'cors'
import createHttpError, {isHttpError} from "http-errors";

const app = express() //Подключаем фреймворк express

app.use(express.json())//Разбирает входящие данные на JSON объекты

app.use(morgan('dev'))

app.use(cors())

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

const corsOptions = {
    origin: 'https://localhost:5000',
    optionSuccessStatus: 200, // для старых браузеров и SmartTV
}

app.get('todos', cors(corsOptions))

export default app
