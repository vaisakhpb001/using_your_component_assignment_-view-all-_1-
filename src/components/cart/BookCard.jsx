import React from 'react';

const BookCard = ({ title, author, year }) => {
  return (
    <div className="book-card" style={styles.card}>
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  }
};

export default BookCard;
