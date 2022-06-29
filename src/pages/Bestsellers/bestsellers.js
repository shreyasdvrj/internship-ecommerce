import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard"
import AllFictionAndNonFictionFilters from "../../components/Filters/allFictionAndNonFictionFilters";

const str_bestsellers =
  "These bestselling books should be on everyone's reading list";

class Bestsellers extends React.Component {
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

export default Bestsellers;