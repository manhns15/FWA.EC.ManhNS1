import React, { useEffect, useRef, useState } from "react";

/** Truy cập và thao tác thực hiện với DOM element*/
const UseRef1 = () => {
  const inputRef = useRef();

  useEffect(() => {
    // Focus vào input ngay khi được mount
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
};

/** Lưu trữ giá trị không gây ra re-render*/
const UseRef2 = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValueRef = useRef(""); //useRef không tham gia vào quá trình rendering

  // useEffect(() => {
  //   // Lưu trữ giá trị trước của inputValue mỗi khi nó thay đổi
  //   previousInputValueRef.current = inputValue;
  // }, [inputValue]); // useEffect chỉ chạy khi giá trị của inputValue thay đổi

  const handleChange = (event) => {
    setInputValue((previousInputValue) => {
      previousInputValueRef.current = previousInputValue;
      return event.target.value;
    });
  };

  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <p>inputValue: {inputValue}</p>
      <p>Previous Value: {previousInputValueRef.current}</p>
    </div>
  );
};

/** Lưu giá trị của biến mà không làm re-render component*/
const UseRef3 = () => {
  const [value, setValue] = useState("");
  const valueRef = useRef("");

  const handleChange = (event) => {
    // Thay đổi giá trị của state 'value'
    setValue(event.target.value);
  };

  const handleSave = () => {
    // Lưu giá trị của state 'value' vào biến tham chiếu 'valueRef'
    valueRef.current = value; //truy cập đến giá trị được lưu trữ mà không làm re-render component
    console.log("Value saved:", valueRef.current);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSave}>Save Value</button>
    </div>
  );
};

export { UseRef1, UseRef2, UseRef3 };
