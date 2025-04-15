import React from 'react';
import { fetchBooks } from '../controllers/booksController';

const BooksList = () => {
  const books = fetchBooks();

  return (
    <div>
      <h2>📚 List of Books</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
