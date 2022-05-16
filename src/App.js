import React from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./sites/Home";
import ProductPage from "./sites/ProductPage"
import DetailsPage from "./sites/DetailsPage";
import ContactPage from "./sites/ContactPage";
import LoginForm from "./sites/Login";
import { AuthProv } from "./context/Auth";
import AdminPage from "./sites/AdminPage";
import AdminProducts from "./components/adminpage/AdminProducts";
import AdminAddProduct from "./components/adminpage/AdminAddProduct"

function App() {
  return (
    <AuthProv>
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/produkter" exact element={<ProductPage />} />
            <Route path="/detail/:id" element={<DetailsPage />} />
            <Route path="/kontakt" exact element={<ContactPage />} />
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/produkter" element={<AdminProducts />} />
            <Route path="/admin/legg-til-produkt" element={<AdminAddProduct />} />
          </Routes>
        </div>
      </Router>
    </AuthProv>
  );
}

export default App;
