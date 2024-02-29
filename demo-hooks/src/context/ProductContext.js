import React, { createContext, useState, useContext } from "react";

// Tạo context
const ProductContext = createContext();

// Tao 1 custom hooks để sử dụng context
export const useProductContext = () => useContext(ProductContext);

// Tạo một provider cho context, cung cấp dữ liệu sản phẩm và setter
export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  // Trả về Provider với giá trị của context là danh sách sản phẩm và setter
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
