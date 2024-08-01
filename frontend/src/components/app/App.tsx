import NavigateBar from "../NavigateBar/NavigateBar";
import DropdownMonth from "../dropdown-month/dropdown-month";
import Calendar from "../calendar/calendar";

function App() {

  // const todos = useSelector(selectTodos);

  return (
    <div className="App">
        <NavigateBar />
        <DropdownMonth />
        <Calendar />
    </div>
  );
}

export default App;
