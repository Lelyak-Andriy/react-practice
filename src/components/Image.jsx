import React from "react";
import ReactDOM from "react-dom";

const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const price = 10.99;

const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.render(product, document.getElementById("root"));
export default Image