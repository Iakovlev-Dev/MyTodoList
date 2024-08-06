import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useAppSelector} from "../../store/hooks";
import {selectDay, selectMonth, selectYear} from "../../store/todo-process/todo-process.selectors";
import {getDate} from "../../utils";
import dayjs from 'dayjs'

type TModalWindow = {
    onClose: () => void
}

export default function ModalWindow ({onClose}: TModalWindow) {
    const currentDay = useAppSelector(selectDay)
    const currentMonth = useAppSelector(selectMonth)
    const currentYear = useAppSelector(selectYear)

    const currentDate = getDate(currentDay, currentMonth, currentYear)

    console.log(dayjs('2024-07-30T15:53:06.710+00:00').isSame('2024-07-30', 'day'))

    return (
        <div
            className="modal show"
        >
            <div className="overlay" onClick={() => onClose()}></div>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={() => onClose()}>
                    <Modal.Title>{currentDate}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onClose()}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>


    )
}
