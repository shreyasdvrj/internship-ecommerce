import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import AllFictionFilters from "../../components/Filters/allFictionFilters"
import ProductCard from "../../components/Product/productCard"

const str_fiction =
  "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories.";

class ExploreFiction extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <TopBar name="Shop Fiction" value={str_fiction}></TopBar>
                <div style = {{'margin-bottom': '5%'}}>
                    <div style = {{'display': 'flex'}}>
                     <AllFictionFilters></AllFictionFilters>
                     <div style = {{'display': 'flex', 'flex-wrap': 'wrap'}}>
                     <ProductCard></ProductCard>
                     <ProductCard></ProductCard>
                     <ProductCard></ProductCard>
                     <ProductCard></ProductCard>
                     <ProductCard></ProductCard>
                     <ProductCard></ProductCard>
                    </div>
                    </div>
                </div>
                <FooterPage />
            </div>

        );
    }
}

export default ExploreFiction;