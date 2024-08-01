import {TState} from "../../types/type-store";
import {NameSpace} from "../../const";

export const selectTodos = (state: TState) => state[NameSpace.TODO_CARDS].todos
