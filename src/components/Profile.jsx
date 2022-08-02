import React from "react";
import ReactDOM from "react-dom";

const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

ReactDOM.render(<Profile />, document.getElementById("root"));


export default Profile;



