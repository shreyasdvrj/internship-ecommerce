import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard"
import AllFictionAndNonFictionFilters from "../../components/Filters/allFictionAndNonFictionFilters";
import axios from 'axios';

import Card from 'react-bootstrap/Card'
import '../../components/Product/productCard.css';
import { Button } from "react-bootstrap";
import img from '../../components/Product/bookimg.jpg';
import { Link } from 'react-router-dom';

const str_bestsellers =
  "These bestselling books should be on everyone's reading list";

class Bestsellers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Books')
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
                     <AllFictionAndNonFictionFilters></AllFictionAndNonFictionFilters>
                     <div style = {{'display': 'flex', 'flex-wrap': 'wrap'}}>
                     {this.state.books && this.state.books.map(book => 
                        <div className="product-card">
                        <Card style={{ width: '15rem'}}>
                            <Card.Img variant="top" src={img} style= {{'object-fit': 'cover'}}/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text style = {{'font-style':'italic'}}>
                                    By Margaret Atwood
                                </Card.Text>
                                <Link to="/product">
                                <Button variant="dark" size="sm">View</Button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </div>)}
                    </div>
                    </div>
                </div>
                <FooterPage />
            </div>

        );
    }
}

export default Bestsellers;