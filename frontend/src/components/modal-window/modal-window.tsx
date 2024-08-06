import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useAppSelector} from "../../store/hooks";
import {selectDay, selectMonth, selectTodos, selectYear} from "../../store/todo-process/todo-process.selectors";
import {getDate, getNumberMonth} from "../../utils";
import dayjs from 'dayjs'
import {TTodo} from "../../types/type-todos";

type TModalWindow = {
    onClose: () => void
}

export default function ModalWindow ({onClose}: TModalWindow) {
    const todoList = useAppSelector(selectTodos)

    const currentDay = useAppSelector(selectDay)
    const currentMonth = useAppSelector(selectMonth)
    const currentYear = useAppSelector(selectYear)

    const currentDateTitle = getDate(currentDay, currentMonth, currentYear)


    const isTodosDate = (current: TTodo, same: string) => {
        return current.todoDate === same
    }

    const sameDate = currentDay + '-' + (getNumberMonth(currentMonth)+1).toString() + '-' + currentYear
    const currentTodosList = todoList.filter((item) =>  isTodosDate(item, sameDate))
    console.log(sameDate)

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
                                    <div className="delete"/>
                                </div>
                            </div>
                        ))}
                    </ul>


                </Modal.Body>

            </Modal.Dialog>
        </div>


    )
}
