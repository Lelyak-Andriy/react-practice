import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Product = ({ imgUrl, name, price, quantity }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h1>
    <button type="button">Add to cart</button>
  </div>
);

// const Product = ({
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// Для того чтобы указать значения свойств по умолчанию, используется синтаксис значений по умолчанию
//  при деструктуризации пропсов
// const Product = ({
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// /*
//  * Определение defaultProps гарантирует, что `props.imgUrl` будет иметь значение,
//  * даже если оно не было указано при вызове компонента в родителе.
//  */
// ReactDOM.render(
//   <Product name="Tacos With Lime" price={10.99} />,
//   document.getElementById("root")
// );

// В разметке компонент записывается как JSX-тег
ReactDOM.render(<Product />, document.getElementById("root"));

// Это аналогично
// ReactDOM.render(React.createElement(Product), document.getElementById("root"));

export default Product;