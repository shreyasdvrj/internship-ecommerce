import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "./topBar.js";
import FictionFilters from "./fictionFilters.js";
import PriceFilters from "./priceFilters.js";

const str_fiction =
  "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories.";
const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";

class ExploreFiction extends React.Component {
    render() {
        return (
            <div>
                <TopBar name="Shop Fiction" value={str_fiction}></TopBar>
                <div className="fiction-f">
                    <FictionFilters></FictionFilters>
                    <PriceFilters></PriceFilters>
                </div>
            </div>

        );
    }
}

export default ExploreFiction;