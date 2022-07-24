import { render } from "@testing-library/react";
import axios from "axios";
import react, { Component } from "react";
import Itemcard from "./itemCard";

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
        const userid = response.data;
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
   
    return (
      <div>
        Hello 
        <div>Cart Items</div>
        {this.state.cartItem.products &&
          this.state.cartItem.products.map((item) => 
          <>
          <Itemcard props = {item} style={{padding : "15px"}}/>
          </>)
          }
      </div>
    );
  }
}

export default Cart;
