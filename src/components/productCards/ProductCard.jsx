import { useState } from "react";
import "./productCard.css";

function ProductCard({ products, selectedProducts, setSelectedProduct }) {
  
  const addToCompare = (id) => {
    const findProduct = products.find((product) => product.id === id);

    if (selectedProducts.length >= 3) {
      alert("Limit only 3");
      return;
    }

    const isExist = selectedProducts.some((product) => product.id === id);

    if (isExist) {
      alert("The product is already selected");
      return;
    }

    const updatedStore = [...selectedProducts, findProduct];

    setSelectedProduct(updatedStore);

    localStorage.setItem("selectedProduct", JSON.stringify(updatedStore));
  };

  return (
    <div className="products-section">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            className="product-card__image"
            src={product.image}
            alt="Pixel"
          />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCompare(product.id)}>
            Add to Compare
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
