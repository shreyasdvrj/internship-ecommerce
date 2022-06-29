import React from "react";
import Card from 'react-bootstrap/Card'
import './productCard.css';
import { Button } from "react-bootstrap";
import img from './bookimg.jpg'
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
    render() {
        return (
            <div className="product-card">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={img} style= {{'object-fit': 'cover'}}/>
                    <Card.Body>
                        <Card.Title>The Handmaid's Tale</Card.Title>
                        <Card.Text style = {{'font-style':'italic'}}>
                            By Margaret Atwood
                        </Card.Text>
                        <Link to="/product">
                        <Button variant="dark" size="sm">View</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
            </div>

        );
    }
}

export default ProductCard;