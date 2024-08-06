import {TState} from "../../types/type-store";
import {NameSpace} from "../../const";

export const selectTodos = (state: TState) => state[NameSpace.TODO_CARDS].todos
export const selectYear = (state: TState) => state[NameSpace.TODO_CARDS].year
export const selectMonth = (state: TState) => state[NameSpace.TODO_CARDS].month
export const selectDay = (state: TState) => state[NameSpace.TODO_CARDS].day

