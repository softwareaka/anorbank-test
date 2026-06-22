import "./comparisonTable.css";

function ComparisonTable({ selectedProducts }) {
  const characteristics = ["price", "color", "storage", "screen"];

  const compareProducts = (characteristic) => {
    const firstValue = selectedProducts[0][characteristic];

    return selectedProducts.some(
      (product) => product[characteristic] !== firstValue
    );
  };

  if (selectedProducts.length === 0) {
    return <h2>Select products to compare</h2>;
  }
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Characteristic</th>
            {selectedProducts.map((product) => (
              <th key={product.id}>{product.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {characteristics.map((characteristic) => (
            <tr
              className={compareProducts(characteristic) ? "different" : ""}
              key={characteristic}
            >
              <td>{characteristic}</td>

              {selectedProducts.map((product) => (
                <td key={product.id}>{product[characteristic]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
