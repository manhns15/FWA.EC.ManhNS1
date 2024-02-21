import React, { useCallback, useEffect, useMemo, useState } from "react";

const FunctionComponent = () => {
  // Phase Mounting
  const [data, setData] = useState("Initial Data");

  useEffect(() => {
    console.log("useEffect (componentDidMount)");
    // Thực hiện các tác vụ sau khi component đã được render lần đầu tiên.
    return () => {
      console.log("useEffect Cleanup (componentWillUnmount)");
      // Thực hiện các tác vụ trước khi component bị unmounted.
    };
  }, []); // Mảng rỗng để đảm bảo chỉ chạy một lần sau khi mount

  // Phase Updating
  useEffect(() => {
    console.log("useEffect (componentDidUpdate)");
    // Thực hiện các tác vụ sau mỗi lần render.
  }, [data]); // Chỉ chạy khi giá trị data thay đổi

  // Phase Memoization (tối ưu performance)
  const memoizedValue = useMemo(() => {
    console.log("useMemo");
    // Thực hiện các tính toán và trả về một giá trị được memoized.
    return data.toUpperCase();
  }, [data]); // Chỉ tính toán lại khi giá trị data thay đổi

  // Phase Callback Memoization (tối ưu performance cho hàm callback)
  const handleClick = useCallback(() => {
    console.log("useCallback");
    // Thực hiện các hành động khi nút được nhấn.
  }, []); // Chỉ tạo lại hàm khi dependencies thay đổi

  // Render
  console.log("Render");
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData("New Data")}>Change Data</button>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default FunctionComponent;
