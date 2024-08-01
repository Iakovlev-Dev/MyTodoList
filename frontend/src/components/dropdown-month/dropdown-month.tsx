import {Container, Dropdown} from "react-bootstrap";
import {Months} from "../../const";

export default function  DropdownMonth() {
    const newArrfromMonths = Object.entries(Months)
    return (
        <Container className="dropdown-btn">
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Выбери месяц
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {newArrfromMonths.map(([item1, item2]) => (
                        <Dropdown.Item href="#" key={item1}>{item2}</Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
        </Container>

    )
}
