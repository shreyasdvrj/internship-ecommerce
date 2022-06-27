import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import Bestsellers from "./components/Bestseller/bestsellers";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navbar/navbar";
import Login from "./pages/Login/login";
import Signup from "./pages//SignUp/signup";
import ExploreFiction from "./pages/Fiction/exploreFiction";
import ExploreNonFiction from "./pages/NonFiction/exploreNonFiction";

// import Product from "./components/Product/product";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Navigation />
            <Landing />
            <Bestsellers></Bestsellers>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/product">
            <Login />
          </Route>
          <Route path="/exploreFiction">
            <ExploreFiction />
          </Route>
          <Route path="/exploreNonFiction">
            <ExploreNonFiction/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
