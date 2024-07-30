import mongoose from "mongoose";
import app from "./app";


const PORT = process.env.PORT


mongoose.connect(process.env.MONGO_CONNECTION as string)
    .then(() => {
        console.log('Mongoose connected')
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }).catch((err) => console.log(err))


