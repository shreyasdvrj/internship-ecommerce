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

const str_fiction =
  "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories.";
const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
