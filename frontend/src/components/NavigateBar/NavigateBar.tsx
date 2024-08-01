import {Button, Container, Stack} from "react-bootstrap";


export default function NavigateBar() {
    return (
        <nav>
            <Stack direction="horizontal" className="nav" gap={3}>
                <Container className="nav-container">
                    <div className="p-2 link logo">My TODOS App</div>
                    <div className="p-2 ms-auto">igorek16131@rambler.ru</div>
                    <Button variant="secondary" className="nav-button" >Sign out</Button>
                </Container>
            </Stack>
        </nav>


    );
}
