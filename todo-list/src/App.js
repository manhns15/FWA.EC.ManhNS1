import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoFormCom from "./components/TodoFormCom";
import TodoListCom from "./components/TodoListCom";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="todo">
          <h1 className="h1 mb-4">Todo App</h1>
          <div className="content">
            <TodoFormCom />
            <TodoListCom />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
