import React from "react";
import NonFictionFilters from "./nonFictionFilters.js";
import PriceFilters from "./priceFilters.js";
import './filters.css';

class AllNonFictionFilters extends React.Component {
    render() {
        return (
            <div className="filters">
                    <NonFictionFilters></NonFictionFilters>
                    <p></p>
                    <p></p>
                    <p></p>
                    <PriceFilters></PriceFilters>
            </div>

        );
    }
}

export default AllNonFictionFilters;