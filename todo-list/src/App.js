import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="todo">
          <h1 className="h1 mb-4">Todo App</h1>
          <div className="content">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
