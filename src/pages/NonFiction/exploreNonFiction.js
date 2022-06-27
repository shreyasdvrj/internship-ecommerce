import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar.js";
import NonFictionFilters from "../../components/ExploreFilters/nonFictionFilters.js";
import PriceFilters from "../../components/ExploreFilters/priceFilters.js";

import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";

const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";

class ExploreNonFiction extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <TopBar name="Shop Non-Fiction" value={str_nonfiction}></TopBar>
                <div className="fiction-f">
                    <NonFictionFilters></NonFictionFilters>
                    <PriceFilters></PriceFilters>
                </div>
                <FooterPage />
            </div>

        );
    }
}

export default ExploreNonFiction;