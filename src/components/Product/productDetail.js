import React from "react";
import './productDetail.css';
import img from './bookimgAsProduct.jpg'
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductInfo from "./productInfo";

const name = 'The Handmaid\'s Tale';
const author = 'By Margaret Atwood';
const price = '\u20B9 248'
const desc = 'A dystopian novel set in a near-future New England, in a strongly patriarchal, white supremacist, totalitarian theonomic/theocratic state, known as the Republic of Gilead, which has overthrown the United States government.'
class ProductDetail extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Navbar></Navbar>
                <div className="product-div">
                    <div className="product-image-div">
                        <img className="product-image" src={img} />
                    </div>
                    <div className="product-info-div">
                        <ProductInfo name={name} author={author} price={price} desc={desc} />
                    </div>

                </div>
                <FooterPage></FooterPage>
            </div>

        );
    }
}

export default ProductDetail;
