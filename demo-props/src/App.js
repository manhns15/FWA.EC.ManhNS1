import './App.css';
import ChildComponent from './child-component/child-component';

function App() {
  const user = {
    name:'Manh Nguyen Sy',
    age: 24,
  }
  return (
    <div>
      {/* <ChildComponent user={user}/> */}
      <ChildComponent {...user}/>
    </div>
  );
}

export default App;
