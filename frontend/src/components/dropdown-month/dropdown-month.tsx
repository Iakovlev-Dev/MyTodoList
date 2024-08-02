import {Container, Dropdown} from "react-bootstrap";
import {Months} from "../../const";

export default function  DropdownMonth() {
    const newArrFromMonths = Object.entries(Months)
    return (
        <Container className="dropdown-btn">
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Выбери месяц
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {newArrFromMonths.map(([item1, item2]) => (
                        <Dropdown.Item href="#" key={item1}>{item2}</Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Выбери год
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        <Dropdown.Item href="#">2024</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>

    )
}
