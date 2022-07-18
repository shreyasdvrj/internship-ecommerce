import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard"
import axios from 'axios';
import FictionAndNonFictionFilters from "../../components/Filters/fictionAndNonFictionFilters";
import PriceFilters from "../../components/Filters/priceFilters";
import "../../components/Filters/filters.css"

const str_bestsellers =
  "These bestselling books should be on everyone's reading list";

class Bestsellers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    
    componentDidMount() {
        axios.get('http://localhost:5000/books/best')
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
                <TopBar name="Shop Bestsellers" value={str_bestsellers}></TopBar>
                <div style = {{'margin-bottom': '5%'}}>
                    <div style = {{'display': 'flex'}}>
                        <div className="filters">
                        <FictionAndNonFictionFilters></FictionAndNonFictionFilters>
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

export default Bestsellers;