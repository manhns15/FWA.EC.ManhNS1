import React from "react";
import { useProductContext } from "../context/ProductContext";

function ProductList() {
  // Sử dụng custom hook để lấy danh sách sản phẩm từ context
  const { products } = useProductContext();

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
