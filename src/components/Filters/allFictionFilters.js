import React from "react";
import FictionFilters from "./fictionFilters.js";
import PriceFilters from "./priceFilters.js";
import './filters.css';

class AllFictionFilters extends React.Component {
    render() {
        return (
            <div className="filters">
                    <FictionFilters></FictionFilters>
                    <p></p>
                    <p></p>
                    <p></p>
                    <PriceFilters></PriceFilters>
            </div>

        );
    }
}

export default AllFictionFilters;