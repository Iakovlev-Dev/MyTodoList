import {TTodosArray} from "../../types/type-todos";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";
import {fetchTodosAction} from "../api-actions";

export type TTodoInitialState = {
    todos: TTodosArray,
    year: string,
    month: string,
    day: string,

}

const initialState: TTodoInitialState = {
    todos: [],
    year: '2024',
    month: 'Июль',
    day: '',

}

export const todosProcess = createSlice({
    name: NameSpace.TODO_CARDS,
    initialState,
    reducers: {
        setMonth: (state, action: PayloadAction<string>) => {
            state.month = action.payload;
        },
        setYear: (state, action: PayloadAction<string>) => {
            state.year = action.payload
        },
        setDay: (state, action: PayloadAction<string>) => {
            state.day = action.payload
        },

    },
    extraReducers (builder) {
        builder
            .addCase(fetchTodosAction.fulfilled, (state, action) => {
                state.todos = action.payload
            })
    }
})

export const {setMonth, setYear, setDay} = todosProcess.actions
