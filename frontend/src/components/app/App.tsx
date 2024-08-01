import {useSelector} from "react-redux";
import {selectTodos} from "../../store/todo-process/todo-process.selectors";

function App() {

  const todos = useSelector(selectTodos);

  return (
    <div className="App">
        {JSON.stringify(todos)}
    </div>
  );
}

export default App;
