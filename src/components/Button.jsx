import React from "react";
import ReactDOM from "react-dom";

import styles from "./Button.module.css";

// const Button = ({ type = "button", label, disabled }) => {
//   const btnClasses = [styles.button];

//   if (disabled) {
//     btnClasses.push(styles.disabled);
//   }

//   return (
//     <button className={btnClasses.join(" ")} type={type} disabled={disabled}>
//       {label}
//     </button>
//   );
// };

const Button = ({ type = "button", label, disabled }) => {
  const btnClass = disabled ? styles.disabled : styles.active;

  return (
    <button className={btnClass} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

ReactDOM.render(<Button />, document.getElementById("root"));

export default Button;