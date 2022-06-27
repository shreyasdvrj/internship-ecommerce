import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MDBCheckbox } from 'mdb-react-ui-kit';

class NonFictionFilters extends React.Component {
    render() {
        return (
            <div><p className="filterHeading">Categories</p>
                <MDBCheckbox name='self-help'value=''  label='Self-Help'/>
                <MDBCheckbox name='science' value='' label='Science' />
                <MDBCheckbox name='historical' value=''  label='Historical' />
                <MDBCheckbox name='religion' value=''  label='Religion' />
                <MDBCheckbox name='biographies' value=''  label='Biographies' />
                <MDBCheckbox name='travel' value=''  label='Travel' />
            </div>

        );
    }
}

export default NonFictionFilters;
