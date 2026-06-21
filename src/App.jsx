import "./App.css";
import CompareProducts from "./components/compareProduct/CompareProducts";

import iphonePro from "./assets/images/iphone16pro.webp";
import samsungUltra from "./assets/images/samsungUltra.webp";
import googlePixel from "./assets/images/googlePixel.jpg";
import xiaomi from "./assets/images/xiaomi.jpg";
import onePlus from "./assets/images/onePlus.png";
import nothingPhone from "./assets/images/nothingPhone.webp";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 16 Pro",
      brand: "Apple",
      price: 999,
      color: "Black",
      storage: "256GB",
      screen: '6.3"',
      image: iphonePro,
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      brand: "Samsung",
      price: 899,
      color: "White",
      storage: "512GB",
      screen: '6.2"',
      image: samsungUltra,
    },
    {
      id: 3,
      name: "Google Pixel 10",
      brand: "Google",
      price: 849,
      color: "Blue",
      storage: "256GB",
      screen: '6.3"',
      image: googlePixel,
    },
    {
      id: 4,
      name: "Xiaomi 15 Ultra",
      brand: "Xiaomi",
      price: 799,
      color: "Silver",
      storage: "512GB",
      screen: '6.7"',
      image: xiaomi,
    },
    {
      id: 5,
      name: "OnePlus 13",
      brand: "OnePlus",
      price: 749,
      color: "Green",
      storage: "256GB",
      screen: '6.8"',
      image: onePlus,
    },
    {
      id: 6,
      name: "Nothing Phone 3",
      brand: "Nothing",
      price: 699,
      color: "White",
      storage: "256GB",
      screen: '6.7"',
      image: nothingPhone,
    },
  ];

  return (
    <div>
      <CompareProducts products={products} />
    </div>
  );
}

export default App;
