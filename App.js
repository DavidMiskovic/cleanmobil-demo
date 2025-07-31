import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buchung" element={<Booking />} />
        <Route path="/bewertungen" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;