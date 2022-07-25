import React, { useState } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

function PriceFilters({getFilter}) {

    
    const [userinfo, setUserInfo] = useState({
      prices: [],
      response: [],
    });
    const [query, setQuery] = useState('')
    var hashmap = new Map();
    const handleChange = (e) => {
      // Destructuring
      setQuery('')
      const { value, checked } = e.target;
      const { prices } = userinfo;
      
      hashmap[value] = checked;
      //query = `http://localhost:5000/books/find?fiction=true`
      Object.keys(hashmap).map(k => {if(hashmap[k] == true)
        setQuery(query + `&${k}=${hashmap[k]}`)})
      
         
      // setQuery(query+ `&${value}=${checked}`)
      // Case 1 : The user checks the box
      if (checked) {
        setUserInfo({
          prices: [...prices, value],
          response: [...prices, value],
        });
      }

      //Case 2  : The user unchecks the box
      else {
        setUserInfo({
          prices: prices.filter((e) => e !== value),
          response: prices.filter((e) => e !== value),
        });
      }
     
    };

    
  

        return (
            <div><p className="filterHeading">Categories</p>
      
                <MDBCheckbox name='prices' value='1' label='Under Rs.100' onChange={handleChange}/>
                <MDBCheckbox name='prices' value='2' label='Rs.100 to Rs.500' onChange={handleChange}/>
                <MDBCheckbox name='prices' value='3'  label='Rs.500 to Rs.1000' onChange={handleChange}/>
                <MDBCheckbox name='prices' value='4'  label='Over Rs.1000' onChange={handleChange}/>
        
                <button onClick={() => getFilter(query)}>Apply Filters</button>
                
            </div>

        );
    }

export default PriceFilters;