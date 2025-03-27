import express from "express";
import { pool } from './config/db';
import cors from 'cors';
import {QueryResult} from "pg";


const app = express();

app.use(express.json());
app.use(cors())



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.post('/postData', (req, res) => {
    const {text, date} = req.body;

    const insertQuery = "INSERT INTO todolist (text, date) VALUES ($1, $2)"

    pool.query(insertQuery, [ text, date], (err: Error | null, result: QueryResult | null) => {
        if (err) {
            console.log(err.message)
            res.send(err)
        } else {
            console.log(result)
            res.send("Posted Data")
        }
    })
})

app.get('/', (req, res) => {
    const fetchQuery = 'SELECT * FROM todolist'

    pool.query(fetchQuery, (err: Error | null, result: QueryResult | null) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result?.rows)
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    const deleteQuery = 'DELETE FROM todolist WHERE id = $1 RETURNING *'

    pool.query(deleteQuery, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        } else {
            console.log(result)
            res.send("Deleted Data")
        }
    })
})


