import React from "react";
import PriceFilters from "./priceFilters.js";
import './filters.css';
import FictionAndNonFictionFilters from "../../../src/components/Filters/fictionAndNonFictionFilters.js";

class AllFictionAndNonFictionFilters extends React.Component {
    render() {
        return (
            <div className="filters">
                    <FictionAndNonFictionFilters></FictionAndNonFictionFilters>
                    <p></p>
                    <p></p>
                    <p></p>
                    <PriceFilters></PriceFilters>
            </div>

        );
    }
}

export default AllFictionAndNonFictionFilters;