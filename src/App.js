import React from "react";
import "./sass/style.scss";
import Navs from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./sites/Home";
import ProductPage from "./sites/ProductPage"
import DetailsPage from "./sites/DetailsPage";
import ContactPage from "./sites/ContactPage";
import LoginForm from "./sites/Login";

function App() {
  return (
    <Router>
      <div>
        <Navs />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/produkter" element={<ProductPage />} />
        <Route path="/detail/:id" element={<DetailsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
