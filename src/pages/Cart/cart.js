import axios from "axios";
import react, { Component } from "react";
import CartItems from "../../components/Cart/CartItems";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import TopBar from "../../components/TopBar/topBar";
import FooterPage from "../../components/Footer/footer";


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      cartItem: {},
      flag: false,
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:5000/users/profile",
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        const userid = response.data.userid;
        axios({
          method: "POST",
          url: "http://localhost:5000/cart/all",
          data: { userid },
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            this.setState({ cartItem: res.data[0] });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    var flag = true;
    if (typeof(this.state.cartItem) === "undefined")
     flag = false
    return (
      <div>

         <Header />
        <Navigation />
        <TopBar name="Cart" value="Items in your cart"></TopBar>
        { true ? (
                <CartItems />
               ) :
              (
                <p>No items</p> 
               
              )}
              <FooterPage/>
      </div>
    );
  }
}

export default Cart;
