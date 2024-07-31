import {useEffect, useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      async function loadTodo () {
          try {
              const response = await fetch('/todos', {method: 'GET'});
              const todos = await response.json();

              setTodos(todos);
          } catch (err) {
              alert(err);
          }
      }
      loadTodo()
  }, [])

  return (
    <div className="App">
        {JSON.stringify(todos)}
    </div>
  );
}

export default App;
