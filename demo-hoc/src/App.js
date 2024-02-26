import "./App.css";
import HighOrderComponent from "./hoc/HighOrderComponent";
import MyComponent from "./my-component/MyComponent";

const apiUrl = "https://restcountries.com/v3.1/all";
const MyComponentWithData = HighOrderComponent(MyComponent, apiUrl);
function App() {
  return (
    <div>
      <MyComponentWithData />
    </div>
  );
}

export default App;
