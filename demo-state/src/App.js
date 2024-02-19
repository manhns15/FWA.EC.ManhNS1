import './App.css';
import ClassComponent from './class-component/ClassComponent';
import FunctionComponent from './function-component/FunctionComponent';

function App() {
  return (
    <div>
      <h1>Class Component</h1>
      <ClassComponent/>
      <h1>Function Component</h1>
      <FunctionComponent/>
    </div>
  );
}

export default App;
