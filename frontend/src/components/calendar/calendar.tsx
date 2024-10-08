import {Container} from "react-bootstrap";
import {DayOfWeek, DayOfWeekNumber} from "../../const";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectMonth, selectYear} from "../../store/todo-process/todo-process.selectors";
import {getAmountDays, getNumberMonth} from "../../utils";
import {setDay} from "../../store/todo-process/todo-process";

type TCalendar = {

    onClose: () => void
}

export default function Calendar ({ onClose}: TCalendar) {
    const dispatch = useAppDispatch();
    const dayWeek = Object.values(DayOfWeek)

    const currentMonth = useAppSelector(selectMonth)
    const currentYear = useAppSelector(selectYear)
    // console.log(getNumberMonth(currentMonth))
    const day = new Date((+currentYear), getNumberMonth(currentMonth), 1)
    const weekday = day.getDay()

    const handleOpenModalClick = (index: number) => {
        onClose()
        dispatch(setDay(index.toString()))
    }

    return (
        <div className="calendar">
            <Container>
                <div className="calendar-body">
                    <div className="calendar-day-of-week">
                        {dayWeek.map((day, index) => (
                            <div key={index}>{day}</div>
                        ))}
                    </div>
                    <div className={`calendar-day ${DayOfWeekNumber[weekday]}`}>
                        {Array.from({length: getAmountDays(currentMonth, currentYear)}).map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleOpenModalClick(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
