import {combineReducers} from "@reduxjs/toolkit";
import {NameSpace} from "../const";
import {todosProcess} from "./todo-process/todo-process";

export const rootReducer = combineReducers({
    [NameSpace.TODO_CARDS]: todosProcess.reducer
})
