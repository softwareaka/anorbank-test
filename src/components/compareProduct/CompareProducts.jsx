// import Products from "./Products";
import { useState } from "react";
import ProductCard from "../productCards/ProductCard";
import "./comparison.css";

import { CiCircleRemove } from "react-icons/ci";
import ComparisonTable from "../comparisonTable/ComparisonTable";

function CompareProducts({ products }) {
  const [selectedProducts, setSelectedProduct] = useState(
    JSON.parse(localStorage.getItem("selectedProduct")) || []
  );

  const deleteProduct = (id) => {
    const removedProduct = selectedProducts.filter(
      (product) => product.id !== id
    );

    setSelectedProduct(removedProduct);
    localStorage.setItem("selectedProduct", JSON.stringify(removedProduct));
  };

  return (
    <div className="compare-page">
      <div className="container">
        <h1 className="title">Product Comparison</h1>

        <ProductCard
          products={products}
          selectedProducts={selectedProducts}
          setSelectedProduct={setSelectedProduct}
        />

        <div className="selected-products">
          <h2>
            Selected Products {selectedProducts ? selectedProducts.length : 0}/3
          </h2>

          <div className="selected-list">
            {selectedProducts.map((product) => (
              <div className="selected-item" key={product.id}>
                <span>{product.name}</span>
                <button
                  className="selected-item__button"
                  onClick={() => deleteProduct(product.id)}
                >
                  <CiCircleRemove className="selected-item__delete--icon" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <ComparisonTable selectedProducts={selectedProducts} />
      </div>
    </div>
  );
}

export default CompareProducts;
