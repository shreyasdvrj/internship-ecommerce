import React from "react";
import './filters.css';
// import "bootstrap/dist/css/bootstrap.css";
import { MDBCheckbox } from 'mdb-react-ui-kit';

class FictionFilters extends React.Component {
    render() {
        return (
            <div className="filters">
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

export default FictionFilters;
