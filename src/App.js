import React from "react";
import "./sass/style.scss";
import Navs from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./sites/Home";
import ProductPage from "./sites/ProductPage"

function App() {
  return (
    <Router>
      <div>
        <Navs />




        <Switch>
					<Route path="/" exact>
            <Home />
          </Route>
					<Route path="/produkter" exact>
            <ProductPage />
          </Route>
          <Route path="/login" exact>
           
          </Route>
          <Route path="/detail/:id">
          
          </Route>
				</Switch>
      </div>
    </Router>
  );
}

export default App;
