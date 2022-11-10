import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [items, setItems] = useState(0)
  const [itemName, setName] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const cart = (price, name) => {
    setItems(items + 1);
    setTotalPrice(totalPrice + price);
    setName((itemName) => [...itemName, name]);
    console.log(itemName)
  }
  
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components // replace with BakeryItem component
        <div>
          <p>{item.name}</p> 
          <BakeryItem image={item.image}></BakeryItem>
          {/* <button onClick={() => setItems(items + 1)}>Click me to buy!</button> */}
          <button onClick={() => cart(item.price, item.name)}>Click me to buy!</button>
        </div>
      ))}
      

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p>Current number of items: {items}</p>
        <p>Current total price: {totalPrice}</p>
        {itemName.map((item, index) => (
          <p>{item}</p>
        ))}
        <p>hi</p>
      </div>
    </div>
  );
}

export default App;
