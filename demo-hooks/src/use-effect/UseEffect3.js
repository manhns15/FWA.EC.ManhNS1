import React, { useEffect } from "react";

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

export default UseEffect3;
