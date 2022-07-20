import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, StrictMode } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import BestsellersCarousel from "./components/Bestseller/bestsellersCarousel";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navbar/navbar";
import Login from "./pages/Login/login";
import Signup from "./pages//SignUp/signup";
import ExploreFiction from "./pages/Fiction/exploreFiction";
import ExploreNonFiction from "./pages/NonFiction/exploreNonFiction";
import ProductDetail from "./components/Product/productDetail";
import PostReview from "./components/Product/postReview";
import Bestsellers from "./pages/Bestsellers/bestsellers";
import AllBooks from "./pages/AllBooks/allBooks";
import Profile from "./pages/Profile/profile";
import Summary from "./pages/Checkout/summary";
import Address from "./pages/Checkout/address";
import Payment from "./pages/Checkout/payment";
import Register from "./test";
import Sidebar from "./components/Sidebar/sidenav";
import ProductList from "./components/Orders/product";

function App() {
  var token = Cookies.get("jwt");
  var loggedIn = false;
  if (token) loggedIn = true;

  const notify = () => {
    // inbuilt-notification
    toast.error('Please login first')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div style={{ position: "sticky" }}>
              <Header />
              <Navigation />
            </div>
            <ToastContainer />
            <Landing />
            <BestsellersCarousel></BestsellersCarousel>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/product">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <ProductDetail />
          </Route>
          <Route path="/checkout/summary">
            <Summary />
          </Route>
          <Route path="/checkout/address">
            <Address />
          </Route>
          <Route path="/checkout/payment">
            <Payment />
          </Route>
          <Route path="/exploreFiction">
    
              <ExploreFiction />
    
          </Route>
          <Route path="/exploreNonFiction">

            <ExploreNonFiction />
          </Route>
          <Route path="/best">
            <Bestsellers />
          </Route>
          <Route path="/all">
            <AllBooks />
          </Route>
          <Route path="/postReview">
            <PostReview />
          </Route>
          {loggedIn ? (
            <>
              <Route path="/profile">
                <Profile />
              </Route>
            </>
          ) : (
            <>
              <Route path="/profile">

                <Login />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
