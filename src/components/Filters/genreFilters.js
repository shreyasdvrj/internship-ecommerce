import React, { useState } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

function GenreFilters({getFilter}) {

    
    const [userinfo, setUserInfo] = useState({
      genres: [],
      response: [],
    });
    
    const handleChange = (e) => {
      // Destructuring
      const { value, checked } = e.target;
      const { genres } = userinfo;
        
      console.log(`${value} is ${checked}`);
      
       
      // Case 1 : The user checks the box
      if (checked) {
        setUserInfo({
          genres: [...genres, value],
          response: [...genres, value],
        });
      }
    
      // Case 2  : The user unchecks the box
      else {
        setUserInfo({
          genres: genres.filter((e) => e !== value),
          response: genres.filter((e) => e !== value),
        });
      }
     
    };

        return (
            <div><p className="filterHeading">Categories</p>
            <form method=''>
                <MDBCheckbox name='genres' value='adventure_fantasy' label='Fantasy' onChange={handleChange}/>
                <MDBCheckbox name='genres' value='literature'  label='Romance' onChange={handleChange}/>
                <MDBCheckbox name='genres' value='history'  label='Historical' onChange={handleChange}/>
                <MDBCheckbox name='genres' value='science'  label='Science' onChange={handleChange}/>
                <MDBCheckbox name='genres' value='comedy'  label='Comedy' onChange={handleChange}/>
                <MDBCheckbox name='genres' value='children'  label='Children' onChange={handleChange}/>
                <MDBCheckbox name='genres' value='education'  label='Education' onChange={handleChange}/>
                <button onClick={() => getFilter(userinfo.genres)}>Apply Filters</button>
                </form>
            </div>

        );
    }

export default GenreFilters;
