import React, {ChangeEvent, FormEvent, useState} from "react";
import {Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectDay, selectMonth, selectTodos, selectYear} from "../../store/todo-process/todo-process.selectors";
import {getDate, getNumberMonth} from "../../utils";

import {TTodo} from "../../types/type-todos";
import {deleteTodoAction, fetchTodosAction, postTodoAction} from "../../store/api-actions";

type TModalWindow = {
    onClose: () => void
}

export default function ModalWindow ({onClose}: TModalWindow) {
    const [todo, setTodo] = useState('')
    const dispatch = useAppDispatch()
    const todoList = useAppSelector(selectTodos)

    const currentDay = useAppSelector(selectDay)
    const currentMonth = useAppSelector(selectMonth)
    const currentYear = useAppSelector(selectYear)

    const currentDateTitle = getDate(currentDay, currentMonth, currentYear)


    const isTodosDate = (current: TTodo, same: string) => {
        return current.todoDate === same
    }

    const todoDate = currentDay + '-' + (getNumberMonth(currentMonth)+1).toString() + '-' + currentYear
    const currentTodosList = todoList.filter((item) =>  isTodosDate(item, todoDate))

    const handleFormSummit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        dispatch(fetchTodosAction())
        if (todo !== 'undefined') {
            const text = todo
            dispatch(postTodoAction({text, todoDate}))
        }

        setTodo('')
    }

    const handleChangeTodo = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setTodo(evt.target.value)
    }

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodoAction({id}))
    }


    return (
        <div
            className="modal show"
        >
            <div className="overlay" onClick={() => onClose()}></div>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={() => onClose()}>
                    <Modal.Title>{currentDateTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        {currentTodosList.map((item, index) => (
                            <div className="task-item" key={index}>
                                <div>
                                    <li>{item.text}</li>
                                </div>
                                <div className="task-buttons">
                                    <div className="edit"/>
                                    <div className="delete" onClick={() => handleDeleteTodo(item._id)}/>
                                </div>
                            </div>
                        ))}
                    </ul>

                    <form method="post" onSubmit={handleFormSummit} className="modal-window_form">
                        <textarea
                            placeholder="Введи задачу"
                            value={todo}
                            onChange={handleChangeTodo}
                            className="modal-window_form_textarea"
                        />
                        <button type="submit" className="modal-window_form_button">Добавить</button>
                    </form>
                </Modal.Body>

            </Modal.Dialog>
        </div>


    )
}
