import React from "react";
import './productInfo.css';
import ButtonGroup from "./buttonGroup";

const printButtonLabel = (event) => {
    console.log(event.target.name);
}
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


                    <ButtonGroup
                        buttons={["Paperback", "Hardcover", "Kindle"]}
                        afterClick={printButtonLabel} />


                </div>
                <button className="p-addToCart">Add to Cart</button>
                
                
            </div>


        );
    }
}

export default ProductInfo;
