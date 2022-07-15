import React from "react";
import Card from 'react-bootstrap/Card'
import './productCard.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const ProductCard = ({props}) => {
    return(
        <div className="product-card">
            <Card style={{ width: '15rem'}}>
                  <Card.Img variant="top" src={props.coverImg} style= {{'object-fit': 'cover'}}/>
                     <Card.Body>
                         <Card.Title>{props.title}</Card.Title>
                         <Card.Text style = {{'font-style':'italic'}}>
                             {props.author}
                         </Card.Text>
                         <Link to={"/product/"+props._id}>
                         <Button variant="dark" size="sm">View</Button>
                         </Link>
                        
                     </Card.Body>
                 </Card>
        </div>
    )
}

export default ProductCard;
