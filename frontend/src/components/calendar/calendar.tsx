import {Container} from "react-bootstrap";
import {DayOfWeek} from "../../const";

export default function Calendar () {
    const dayWeek = Object.values(DayOfWeek)
    return (
        <div className="calendar">
            <Container>
                <div className="calendar-body">
                    <div className="calendar-day-of-week">
                        {dayWeek.map((day, index) => (
                            <div key={index}>{day}</div>
                        ))}
                    </div>
                    <div className="calendar-day">
                        {Array.from({length: 31}).map((_, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
