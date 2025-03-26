import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config()
console.log("MONGO_CONNECTION", process.env.MONGP_CONNECTION);

const PORT = process.env.PORT || 3001


mongoose.connect(process.env.MONGO_CONNECTION as string)
    .then(() => {
        console.log('Mongoose connected')
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }).catch((err) => console.log(err))


