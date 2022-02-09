import React from "react";
import ReactDOM from "react-dom";

const Product = (props) => (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

// В разметке компонент записывается как JSX-тег
ReactDOM.render(<Product />, document.getElementById("root"));

// Это аналогично
// ReactDOM.render(React.createElement(Product), document.getElementById("root"));
export default Product;
