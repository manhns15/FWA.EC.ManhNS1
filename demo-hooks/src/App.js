import { useMemo, useState } from "react";
import "./App.css";
import UseCallBack from "./use-callback/UseCallBack";
import { UseEffect1, UseEffect2, UseEffect3 } from "./use-effect/useEffect";
import { UseRef1, UseRef2, UseRef3 } from "./use-ref/UseRef";
import Couter from "./use-state/Couter";
import FormHandling from "./use-state/FormHandling";
import Modal from "./use-state/Modal";
import { NumberList, UseMemo, UseMemo2 } from "./useMemo/UseMemo";
import UseReducer1 from "./use-reducer/UseReducer";
import UseReducer2 from "./use-reducer/UseReducer2";
import UseReducer3 from "./use-reducer/UseReducer3";
import { ProductContextProvider } from "./context/ProductContext";
import ProductList from "./products/ProductList";
import { EventProvider } from "./context/EventContext";
import Button from "./products/Button";

function App() {
  /** useMemo demo */
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  // Sử dụng useMemo để memoize giá trị của data
  const data = useMemo(() => {
    console.log("Calculating data...");
    // Logic tính toán giá trị của data
    return "Some calculated data";
  }, []); // Không có dependency
  console.log("Rendering App");

  return (
    <div className="App">
      {/* <div>
        <h2>Couter</h2>
        <Couter />
        <h2>Modal</h2>
        <Modal />
        <h2>Form Handling</h2>
        <FormHandling />
      </div>
      <hr />
      <div>
        <h2>UseEffect 1</h2>
        <UseEffect1 />
        <h2>UseEffect 2</h2>
        <UseEffect2 />
        <h2>UseEffect 3 (scroll)</h2>
        <UseEffect3 />
      </div>
      <hr />
      <div>
        <h2>UseRef 1</h2>
        <UseRef1 />
        <h2>UseRef 2</h2>
        <UseRef2 />
        <h2>UseRef 3</h2>
        <UseRef3 />
      </div>
      <hr />
      <h2>UseCallBack</h2>
      <UseCallBack />
      <hr /> */}
      {/* <h2>UseMemo</h2>
      <UseMemo />
      <NumberList n={count} handleClick={handleClick} />
      <UseMemo2 data={data} /> */}
      {/* <h2>UseReducer</h2> */}
      {/* <UseReducer1 /> */}
      {/* <UseReducer2 /> */}
      {/* <UseReducer3 /> */}
      <h2>UseContext</h2>
      {/* Sử dụng ProductContextProvider để cung cấp dữ liệu sản phẩm cho toàn bộ ứng dụng */}
      <ProductContextProvider>
        <div>
          <h1>Product Management App</h1>
          <ProductList />
        </div>
      </ProductContextProvider>

      <EventProvider>
        <div>
          <h1>Button Context</h1>
          <Button />
        </div>
      </EventProvider>
    </div>
  );
}

export default App;
