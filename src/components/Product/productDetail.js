import React from "react";
import './productDetail.css';
import img from './bookimgAsProduct.jpg'
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductInfo from "./productInfo";
import ReviewSection from "./reviewSection";
import {useLocation} from 'react-router-dom';

const name = 'The Handmaid\'s Tale';
const author = 'By Margaret Atwood';
const price = '\u20B9 248'
const desc = 'A dystopian novel set in a near-future New England, in a strongly patriarchal, white supremacist, totalitarian theonomic/theocratic state, known as the Republic of Gilead, which has overthrown the United States government.'
const ProductDetail =() => {
    
    const location = useLocation()
    const {bookDetail} = location.state

        return (
            <div>
                {/* {console.log("rating",bookDetail.props.likedPercent)} */}
                <Header></Header>
                <Navbar></Navbar>
                <div className="product-div">
                    <div className="product-image-div">
                        <img className="product-image" src={bookDetail.props.coverImg} />
                    </div>
                    <div className="product-info-div">
                        <ProductInfo name={bookDetail.props.title} author={bookDetail.props.author} price={bookDetail.props.Price} desc={bookDetail.props.description} />
                    </div>

                </div>
                <ReviewSection rating={bookDetail.props.rating}></ReviewSection>
                <FooterPage></FooterPage>
            </div>

        );
    
}

export default ProductDetail;
