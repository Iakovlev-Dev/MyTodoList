import {Container} from "react-bootstrap";
import {DayOfWeek, DayOfWeekNumber} from "../../const";

export default function Calendar () {
    const dayWeek = Object.values(DayOfWeek)
    // const day = new Date(2024, 7, 1)
    // const weekday = 1



    return (
        <div className="calendar">
            <Container>
                <div className="calendar-body">
                    <div className="calendar-day-of-week">
                        {dayWeek.map((day, index) => (
                            <div key={index}>{day}</div>
                        ))}
                    </div>
                    <div className={`calendar-day ${DayOfWeekNumber[2]}`}>
                        {Array.from({length: 31}).map((_, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
