import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [clickCount, setClickCount] = useState(0);

  // Effect sẽ chạy sau mỗi lần render
  useEffect(() => {
    // Cập nhật tiêu đề trang với số lần nhấp chuột
    document.title = `Clicked ${clickCount} times`;

    const handleClick = () => {
      alert("Button clicked!");
    };
    document.getElementById("myButton").addEventListener("click", handleClick);
    // Cleanup function: loại bỏ sự kiện khi component unmount
    return () => {
      document
        .getElementById("myButton")
        .removeEventListener("click", handleClick);
    };
  }, [clickCount]);

  return (
    <div>
      <p>You clicked {clickCount} times</p>
      {/* Button để tăng giá trị clickCount */}
      <button id="myButton" onClick={() => setClickCount(clickCount + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffect1;
