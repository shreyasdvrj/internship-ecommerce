import React, { useState, useEffect } from "react";
import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Query } from "mongoose";

function GenreFilters({ getFilter }) {
  const [userinfo, setUserInfo] = useState({
    genres: [],
    response: [],
  });
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState({
    startPrice: "",
    endPrice: "",
  });
  var hashmap = new Map();
  const handleChange = (e) => {
    // Destructuring
    setQuery("");
    const { value, checked } = e.target;
    const { genres } = userinfo;

    hashmap[value] = checked;
    //query = `http://localhost:5000/books/find?fiction=true`
    Object.keys(hashmap).map((k) => {
      if (hashmap[k] == true) setQuery(query + `&${k}=${hashmap[k]}`);
    });

    // setQuery(query+ `&${value}=${checked}`)
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        genres: [...genres, value],
        response: [...genres, value],
      });
    }

    //Case 2  : The user unchecks the box
    else {
      setUserInfo({
        genres: genres.filter((e) => e !== value),
        response: genres.filter((e) => e !== value),
      });
    }
  };
  const handleChangeNumber = (e) => {
    const { name, value } = e.target;
    setPrice({
      ...price, //spread operator
      [name]: value,
    });
  };
  const { startPrice, endPrice } = price;
  const sendQuery = () => {
    getFilter(query);
  };

  const clickQuery = async () => {
    setQuery(query + `&startPrice=${startPrice}&endPrice=${endPrice}`);
  };

  return (
    <div>
      <p className="filterHeading">Categories</p>

      <MDBCheckbox
        name="genres"
        value="adventure_fantasy"
        label="Fantasy"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="biographies"
        label="Biographies"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="children"
        label="Children"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="comedy"
        label="Comedy"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="education"
        label="Education"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="history"
        label="Historical"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="knowledge"
        label="Knowledge"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="literature"
        label="Literature"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="romance"
        label="Romance"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="science"
        label="Science"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="selfHelp"
        label="Self Help"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="spirituality_religion"
        label="Spirituality and Religion"
        onChange={handleChange}
      />
      <input
        type="number"
        name="startPrice"
        value={price.startPrice}
        label="Starting Price"
        id="typeNumber"
        onChange={handleChangeNumber}
        style={{marginTop: "25px"}}
      />
      <input
        type="number"
        name="endPrice"
        value={price.endPrice}
        label="Ending Price"
        id="typeNumber"
        onChange={handleChangeNumber}
      />
      <button style={{marginTop: '10px'}} onClick={clickQuery}>Set Price Filter</button>
      <button style={{marginTop: '30px'}} onClick={sendQuery}>Apply Filters</button>
    </div>
  );
}

export default GenreFilters;
