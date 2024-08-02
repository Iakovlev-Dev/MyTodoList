import {Container, Dropdown} from "react-bootstrap";
import {Months} from "../../const";
import {selectMonth, selectYear} from "../../store/todo-process/todo-process.selectors";
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setMonth, setYear} from "../../store/todo-process/todo-process";

export default function  DropdownMonth() {
    const dispatch = useAppDispatch()
    const newArrFromMonths = Object.entries(Months)
    const currentMonth = useAppSelector(selectMonth)
    const currentYear = useAppSelector(selectYear)

    const handleMonthClick = (month: string) => {
        dispatch(setMonth(month))
    }

    const handleYearClick = (year: string) => {
        dispatch(setYear(year))
    }

    return (
        <Container className="dropdown-btn">
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    {currentMonth === '' ? 'Выбери месяц' : currentMonth}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {newArrFromMonths.map(([item1, item2]) => (
                        <Dropdown.Item href="#"
                                       key={item1}
                                       onClick={() => handleMonthClick(item2)}
                        >
                            {item2}
                        </Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    {currentYear === '' ? 'Выбери год' : currentYear}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => handleYearClick('2024')}>2024</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => handleYearClick('2025')}>2025</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>

    )
}
