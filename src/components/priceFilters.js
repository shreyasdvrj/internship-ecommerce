import React from "react";
import './filters.css';
import { MDBCheckbox } from 'mdb-react-ui-kit';

class PriceFilters extends React.Component {
    render() {
        return (
            <div className="filters">
                <MDBCheckbox name='under100' value='' label='Under Rs.100' />
                <MDBCheckbox name='100to500' value=''  label='Rs.100 to Rs.500' />
                <MDBCheckbox name='500to1000' value=''  label='Rs.500 to Rs.1000' />
                <MDBCheckbox name='over1000' value=''  label='Over Rs.1000' />
            </div>

        );
    }
}

export default PriceFilters;
