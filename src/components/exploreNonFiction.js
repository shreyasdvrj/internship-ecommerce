import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "./topBar.js";
import NonFictionFilters from "./nonFictionFilters.js";
import PriceFilters from "./priceFilters.js";

const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";

class ExploreNonFiction extends React.Component {
    render() {
        return (
            <div>
                <TopBar name="Shop Non-Fiction" value={str_nonfiction}></TopBar>
                <div className="fiction-f">
                    <NonFictionFilters></NonFictionFilters>
                    <PriceFilters></PriceFilters>
                </div>
            </div>

        );
    }
}

export default ExploreNonFiction;