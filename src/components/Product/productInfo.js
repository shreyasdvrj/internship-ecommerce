import React from "react";
import './productInfo.css';
import ButtonGroup from "./buttonGroup";
import axios from 'axios';

const printButtonLabel = (event) => {
    console.log(event.target.name);
}
class ProductInfo extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            books_list: []
        }
    }
    componentDidMount = () => {
        this.getBookList();
    }
    getBookList(){
        axios.get('http://localhost:4000/books')
        .then((response) => {
            console.log(response);
            this.setState({
                books_list: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        const {books_list} = this.state;
        console.log(typeof(books_list))
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
