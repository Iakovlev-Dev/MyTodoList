import {Schema, InferSchemaType, model} from "mongoose";

const todoSchema = new Schema({
    text: {type: String, required: true}
}, {timestamps: true})

export type TodoT = InferSchemaType<typeof todoSchema>

export const todoModel = model<TodoT>('Todo', todoSchema)

