import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import Bestsellers from "./components/bestsellers";
import Footer from "./components/footer";
import Navigation from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import ExploreFiction from "./components/exploreFiction";
import ExploreNonFiction from "./components/exploreNonFiction";


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
