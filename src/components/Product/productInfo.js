import React from "react";
import "./productInfo.css";
import ButtonGroup from "./buttonGroup";
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      bookid: this.props.book._id,
      type: "Paperback",
      price: this.props.book.price,
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
        this.setState({ user: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }
  printButtonLabel = (event) => {
    if (event.target.name === "Kindle") 
    this.setState({ price: this.props.book.price });
    else if (event.target.name === "Hardcover")
      this.setState({ price: this.props.book.price + 100 });
    else this.setState({ price: this.props.book.price + 50 });
    this.setState({ type: event.target.name });
  };

  addToCart = () => {
    console.log(this.state.type);
    const review = {
      bookid: [this.state.bookid, this.state.type, this.state.price],
      userid: this.state.user.userid,
    };
    axios({
      method: "POST",
      url: "http://localhost:5000/cart/add",
      data: review,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.data);
        toast("Added to Cart!");
      })
      .catch((res, error) => {
        console.log("Problem adding to cart", error);
        console.log(res);
      });
  };

  render() {
    const price = String(this.state.price);
    var numRating = this.props.book.numRatings;
    numRating = numRating.toLocaleString("en-IN");
    var loggedIn = true;
    if (!this.state.user) loggedIn = false;

    return (
      <div className="pdiv">
        <ToastContainer />
        <h1 className="book-name">{this.props.book.title}</h1>
        <h2 className="book-author">{this.props.book.author}</h2>
        <strong>
          <p className="book-desc">&#8377;{price}</p>
        </strong>
        <div style={{ display: "flex" }}>
        {console.log(this.props.book.rating)}
          <ReactStars
            count={5}
            value={this.props.book.rating}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          
          <p className="book-rating">{numRating} Voters</p>
        </div>
        <p className="book-desc">{this.props.book.description}</p>
        <h2 className="book-formats">Formats</h2>
        <div style={{ display: "flex" }}>
          <ButtonGroup
            buttons={["Paperback", "Hardcover", "Kindle"]}
            afterClick={this.printButtonLabel}
          />
        </div>
        {console.log(loggedIn)}
        <button
          className="p-addToCart"
          onClick={() => {
            loggedIn ? this.addToCart() : alert("You need to login first");
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default ProductInfo;
