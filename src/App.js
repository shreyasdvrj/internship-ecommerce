import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
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
import NewReleases from "./pages/NewReleases/newReleases";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Navigation />
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
          <Route path="/exploreFiction">
            <ExploreFiction />
          </Route>
          <Route path="/exploreNonFiction">
            <ExploreNonFiction/>
          </Route>
          <Route path="/best">
            <Bestsellers />
          </Route>
          <Route path="/new">
            <NewReleases />
          </Route>
          <Route path="/postReview">
            <PostReview />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
