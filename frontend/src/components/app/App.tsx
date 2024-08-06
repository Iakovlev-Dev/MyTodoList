import NavigateBar from "../NavigateBar/NavigateBar";
import DropdownMonth from "../dropdown-month/dropdown-month";
import Calendar from "../calendar/calendar";
import ModalWindow from "../modal-window/modal-window";
import React, {useState} from "react";


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(!isModalOpen)
    }
  // const todos = useSelector(selectTodos);

  return (
    <div className="App">
        <NavigateBar />
        <DropdownMonth />
        <Calendar onClose={handleCloseModal}/>
        {isModalOpen && <ModalWindow onClose={handleCloseModal}/>}
    </div>
  );
}

export default App;
