import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar.js";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import AllNonFictionFilters from "../../components/Filters/allNonFictionFilters";
import ProductCard from "../../components/Product/productCard.js";

const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";

class ExploreNonFiction extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <TopBar name="Shop Non-Fiction" value={str_nonfiction}></TopBar>
                <div style = {{'margin-bottom': '5%'}}>
                    <div style = {{display: 'flex'}}>
                    <AllNonFictionFilters></AllNonFictionFilters>
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

export default ExploreNonFiction;