// src/App.jsx

import React from 'react';
import BookCard from './components/cart/BookCard';
// import BookCard from "./components/cart/BookCard";


const App = () => {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Digital Library</h1>
      {books.map(book => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
        />
      ))}
    </div>
  );
};

export default App;
