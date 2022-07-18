import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar.js";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import axios from 'axios';
import PriceFilters from "../../components/Filters/priceFilters";
import GenreFilters from "../../components/Filters/genreFilters";
import ProductCard from "../../components/Product/productCard.js";
import "../../components/Filters/filters.css"

const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";

class ExploreNonFiction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }
      componentDidMount() {
        axios.get('http://localhost:5000/books/nonfiction')
            .then(response => {
                this.setState({ books: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <TopBar name="Shop Non-Fiction" value={str_nonfiction}></TopBar>
                <div style = {{'margin-bottom': '5%'}}>
                    <div style = {{display: 'flex'}}>
                    <div className="filters">
                    <GenreFilters></GenreFilters>
              <p></p>
              <p></p>
              <p></p>
              <PriceFilters></PriceFilters>

                    </div>
                    <div style = {{'display': 'flex', 'flex-wrap': 'wrap'}}>
                    {this.state.books && this.state.books.map((book) => (

                    <ProductCard props = {book} ></ProductCard>
                    ))} 

                    </div>
                    </div>
                </div>
                <FooterPage />
            </div>

        );
    }
}

export default ExploreNonFiction;