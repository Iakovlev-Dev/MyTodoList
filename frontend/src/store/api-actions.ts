import {TAppDispatch, TState} from "../types/type-store";
import {AxiosInstance} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { TTodosArray} from "../types/type-todos";

type TApiDispatch = {
    dispatch: TAppDispatch,
    store: TState,
    extra: AxiosInstance
}

export const fetchTodosAction = createAsyncThunk<TTodosArray, undefined, TApiDispatch>('fetchTodos',
    async (_arg, {extra: api}) => {
    const {data} = await api.get<TTodosArray>('/todos')
    console.log(data)
    return data
    }
    )

