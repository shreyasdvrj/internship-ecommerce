import React from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';


class FictionAndNonFictionFilters extends React.Component {
    
    render() {
        
        return (
            
            <div><p className="filterHeading">Categories</p>
                <MDBCheckbox name='fiction' value='' label='Fiction'  />
                <MDBCheckbox name='non-fiction' value=''  label='Non-fiction' />
            </div>

        );
    }
}

export default FictionAndNonFictionFilters;
