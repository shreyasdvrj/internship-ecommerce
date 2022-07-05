import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
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
import Profile from "./pages/Profile/profile";
import Summary from "./pages/Checkout/summary"
import Address from "./pages/Checkout/address"
import Payment from "./pages/Checkout/payment";
import Sidebar from "./components/Sidebar/sidenav";
import ProductList from "./components/Orders/product";


function App() {
  const [user,setUser] = useState({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    password2 : ""
})
const handleChange = e =>{
const {name,value} = e.target
setUser({
...user,//spread operator 
[name]:value
})
}
//register function 
const egister = ()=>{
const {firstname,lastname,email,password,password2} = user
console.log(user)
if (firstname && lastname && email && password && password2){
axios({
  method: "POST",
  url: "localhost:5000/api/register",
data: user})
.then(res=>console.log(res))
}
else{
   alert("invalid input")
}};
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div style={{ position: "sticky" }}>
              <Header />
              <Navigation />
            </div>
            <Landing />
            <form action="../../post" method="post"  className="form">
                <input type="text"  name="firstname" value={user.firstanme} onChange={handleChange} placeholder="firstname"/>
                     <input type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="lastname"/>
                     <input type="text"  name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                      <input type="password" name="password" value={user.password} onChange={handleChange}    placeholder="password"/>
                      <input type="password" name="password2" value={user.password2} onChange={handleChange} placeholder="password2"/>
          <button type="submit" onClick={egister}>register</button>
        </form>
            <BestsellersCarousel></BestsellersCarousel>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
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
