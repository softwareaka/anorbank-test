import { useState } from "react";
import "./productCard.css";

function ProductCard({ products, selectedProducts, setSelectedProduct }) {
  const addToComparison = (id) => {
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
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__price">${product.price}</p>
          <button className="product-card__btn" onClick={() => addToComparison(product.id)}>
            Add to Compare
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
