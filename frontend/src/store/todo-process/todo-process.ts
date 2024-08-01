import {TTodo} from "../../types/type-todos";
import {createSlice} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";
import {fetchTodosAction} from "../api-actions";

export type TTodoInitialState = {
    todos: TTodo[]
}

const initialState: TTodoInitialState = {
    todos: []
}

export const todosProcess = createSlice({
    name: NameSpace.TODO_CARDS,
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
            .addCase(fetchTodosAction.fulfilled, (state, action) => {
                state.todos = action.payload
                console.log(action)
            })
    }
})
