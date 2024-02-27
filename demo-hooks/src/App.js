import "./App.css";
import UseEffect1 from "./use-effect/UseEffect1";
import UseEffect2 from "./use-effect/UseEffect2";
import UseEffect3 from "./use-effect/UseEffect3";
import Couter from "./use-state/Couter";
import FormHandling from "./use-state/FormHandling";
import Modal from "./use-state/Modal";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Couter</h2>
        <Couter />
        <h2>Modal</h2>
        <Modal />
        <h2>Form Handling</h2>
        <FormHandling />
      </div>

      <div>
        <h2>UseEffect 1</h2>
        <UseEffect1 />
        <h2>UseEffect 2</h2>
        <UseEffect2 />
        <h2>UseEffect 2</h2>
        <UseEffect3 />
      </div>
    </div>
  );
}

export default App;
