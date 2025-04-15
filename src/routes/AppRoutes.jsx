import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BooksList from "../views/BooksList";
import MoviesList from "../views/MoviesList";

const AppRoutes = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/books">Books</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/books" element={<BooksList />} />
        <Route path="/movies" element={<MoviesList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
