import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import FictionFilters from "../../components/ExploreFilters/fictionFilters";
import PriceFilters from "../../components/ExploreFilters/priceFilters.js";

import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";

const str_fiction =
  "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories.";
const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";

class ExploreFiction extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <TopBar name="Shop Fiction" value={str_fiction}></TopBar>
                <div className="fiction-f">
                    <FictionFilters></FictionFilters>
                    <PriceFilters></PriceFilters>
                </div>
                <FooterPage />
            </div>

        );
    }
}

export default ExploreFiction;