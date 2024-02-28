import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  // Sử dụng useMemo để memoize giá trị của giai thừa
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= count; i++) {
      console.log("i", i);
      result *= i;
    }
    console.log("result", result);
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Factorial: {factorial}</p>
      {/* Truyền hàm increment vào component con */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const NumberList = ({ n, handleClick }) => {
  // Tạo một mảng số từ 1 đến n
  const numbers = useMemo(() => {
    console.log("Generating numbers...");
    const numberArray = [];
    for (let i = 1; i <= n; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }, [n]);

  // Tính tổng của tất cả các số trong mảng numbers
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((total, num) => total + num, 0);
  }, [numbers]);

  return (
    <div>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Sum: {sum}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

/** Tránh truyền props không cần thiết */
const UseMemo2 = ({ data }) => {
  // Component con sử dụng props data
  console.log("Rendering UseMemo2 with data:", data);
  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
};

export { UseMemo, NumberList, UseMemo2 };
