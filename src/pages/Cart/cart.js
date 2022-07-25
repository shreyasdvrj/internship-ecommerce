import { render } from "@testing-library/react";
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
        // this.setState({ userid: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    // const userid = this.state.userid;
    // console.log(this.state.userid);
  }
  render() {
   console.log(this.state.cartItem.products)
    return (
      <div>
         <Header />
        <Navigation />
        <TopBar name="Cart" value="Items in your cart"></TopBar>
              <CartItems />
          <Link to='/checkout/summary'>
          <button>Checkout</button></Link>
          <FooterPage/>
      </div>
    );
  }
}

export default Cart;
