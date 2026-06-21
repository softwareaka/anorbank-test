import { useState } from "react";

function ComparisonTable({ selectedProducts }) {
  const [isDifferent, setIsDifferent] = useState(false);

  const compareProducts = () => {};

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Characteristic</th>
            {selectedProducts.map((product) => (
              <th>{product.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="different">
            <td>Price</td>
            <td>$999</td>
            <td>$899</td>
            <td>$849</td>
          </tr>

          <tr className="different">
            <td>Storage</td>
            <td>256 GB</td>
            <td>512 GB</td>
            <td>256 GB</td>
          </tr>

          <tr className="different">
            <td>Color</td>
            <td>Black</td>
            <td>White</td>
            <td>Black</td>
          </tr>

          <tr>
            <td>Warranty</td>
            <td>1 Year</td>
            <td>1 Year</td>
            <td>1 Year</td>
          </tr>

          <tr className="different">
            <td>Screen</td>
            <td>6.1"</td>
            <td>6.3"</td>
            <td>6.2"</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
