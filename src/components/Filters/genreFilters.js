import React from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

class GenreFilters extends React.Component {
    render() {
        return (
            <div><p className="filterHeading">Categories</p>
            
                <MDBCheckbox name='fantasy' value='' label='Fantasy' />
                <MDBCheckbox name='romance' value=''  label='Romance' />
                <MDBCheckbox name='historical' value=''  label='Historical' />
                <MDBCheckbox name='science' value=''  label='Science' />
                <MDBCheckbox name='comedy' value=''  label='Comedy' />
                <MDBCheckbox name='children' value=''  label='Children' />
                <MDBCheckbox name='series' value=''  label='Series' />
            </div>

        );
    }
}

export default GenreFilters;
