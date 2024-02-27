import React, { useEffect, useState } from "react";

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

export default UseEffect2;
