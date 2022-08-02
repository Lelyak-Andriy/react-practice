import React from "react";
import ReactDOM from "react-dom";

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li>{book.name}</li>
//       ))}
//     </ul>
//   );
// };

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <BookList books={favouriteBooks} />,
  document.getElementById("root")
);

export default BookList;