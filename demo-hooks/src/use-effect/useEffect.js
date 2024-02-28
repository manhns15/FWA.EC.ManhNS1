import React, { useEffect, useState } from "react";

/** UseEffect 1 */
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

/** UseEffect 2 */
const UseEffect2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hiệu ứng khi component được mount
    console.log("Component được mount");

    // Sử dụng setTimeout để tự động ẩn component sau 3 giây
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Return một cleanup function để hủy bỏ setTimeout nếu component bị unmount trước khi hiệu ứng kết thúc
    return () => clearTimeout(timer);
  }, []); // Dependency array rỗng, nghĩa là useEffect chỉ chạy một lần khi component được mount

  useEffect(() => {
    // Hiệu ứng khi component thay đổi isVisible
    console.log("isVisible thay đổi:", isVisible);
  }, [isVisible]); // useEffect này sẽ chạy mỗi khi giá trị của isVisible thay đổi

  return (
    <div>
      {isVisible && (
        <div
          style={{
            margin: "auto",
            width: "200px",
            height: "200px",
            backgroundColor: "lightblue",
            transition: "opacity 0.5s",
            opacity: isVisible ? 1 : 0, // Sử dụng opacity để tạo hiệu ứng fade in/out
          }}
        >
          <h2>Hello, World!</h2>
        </div>
      )}
    </div>
  );
};

/** UseEffect 3 */
const UseEffect3 = () => {
  useEffect(() => {
    // Đăng ký sự kiện khi component được mount
    const handleScroll = () => {
      // Xử lý sự kiện scroll ở đây
      console.log("Đã scroll");
    };

    window.addEventListener("scroll", handleScroll);

    // Return một cleanup function để hủy đăng ký sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("remove scroll");
    };
  }, []); // Dependency array rỗng, nghĩa là useEffect chỉ chạy một lần khi component được mount

  return <div>{/* Nội dung của component */}</div>;
};
export { UseEffect1, UseEffect2, UseEffect3 };
