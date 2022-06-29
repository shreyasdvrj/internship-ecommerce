import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard"
import AllFictionAndNonFictionFilters from "../../components/Filters/allFictionAndNonFictionFilters";

const str_newReleases =
  "Be upto date with our newest releases. Updated every week.";

class NewReleases extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <TopBar name="Shop New Releases" value={str_newReleases}></TopBar>
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

export default NewReleases;