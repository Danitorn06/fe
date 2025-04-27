import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApiExplorer from "./pages/APIExplorer";
import RegisterReferrer from "./pages/RegisterReferrer";
import "./styles/App.css";

function App() {
  return (
    <Router>
  <div className="App">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-explorer" element={<ApiExplorer />} />
        <Route path="/register-referrer" element={<RegisterReferrer />} />
      </Routes>
    </main>
    <Footer />
  </div>
</Router>
  );
}

export default App;
