import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard";
import axios from "axios";
import PriceFilters from "../../components/Filters/priceFilters";
import FictionAndNonFictionFilters from "../../components/Filters/fictionAndNonFictionFilters";
import "../../components/Filters/filters.css";

const str_newReleases =
  "Explore our widest range of fiction and non fiction books.";

class NewReleases extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/books/all")
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <TopBar name="Shop All Books" value={str_newReleases}></TopBar>
        <div style={{ "margin-bottom": "5%" }}>
          <div style={{ display: "flex" }}>
            <div className="filters">
              <FictionAndNonFictionFilters></FictionAndNonFictionFilters>
              <p></p>
              <p></p>
              <p></p>
              <PriceFilters></PriceFilters>
            </div>
            <div style={{ display: "flex", "flex-wrap": "wrap" }}>
              {this.state.books &&
                this.state.books.map((book) => (
                  <ProductCard props={book}></ProductCard>
                ))}
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default NewReleases;
