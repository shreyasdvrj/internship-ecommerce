import React from "react";
import './productInfo.css';
import { Button } from "react-bootstrap";


class ProductInfo extends React.Component {
    render() {
        return (
            <div className='pdiv'>
                <h1 className="book-name">{this.props.name}</h1>
                <h2 className="book-author">{this.props.author}</h2>
                <p className="book-desc">{this.props.price}</p>
                <p className="book-desc">{this.props.desc}</p>
                <h2 className="book-formats">Formats</h2>
                <div style={{ 'display': 'flex' }}>
                    <button className="p-b1">Paperback</button>
                    <button className="p-b2">Hardcover</button>
                    <button className="p-b3">Kindle</button>
                </div>
                <button className="p-addToCart">Add to Cart</button>
            </div>


        );
    }
}

export default ProductInfo;
