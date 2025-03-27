import {TAppDispatch, TState} from "../types/type-store";
import {AxiosInstance} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {TTodo, TTodosArray} from "../types/type-todos";

type TApiDispatch = {
    dispatch: TAppDispatch,
    store: TState,
    extra: AxiosInstance
}

export const fetchTodosAction = createAsyncThunk<TTodosArray, undefined, TApiDispatch>('fetchTodos',
    async (_arg, {extra: api}) => {
    const {data} = await api.get<TTodosArray>('/')
    return data
    })

export const postTodoAction = createAsyncThunk<void, { text: string, date: string }, TApiDispatch>('postTodos',
async ({text, date}, {dispatch, extra: api}) => {
    await api.post<TTodo>('/postData', {text, date})
    dispatch(fetchTodosAction())
})

export const deleteTodoAction = createAsyncThunk<void, { id: string }, TApiDispatch>('deleteTodo',
    async ({id}, {dispatch, extra: api}) => {
        await api.delete(`/delete/${id}`)
        dispatch(fetchTodosAction())
    }
    )
