import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard";
import axios from 'axios';
import PriceFilters from "../../components/Filters/priceFilters";
import GenreFilters from "../../components/Filters/genreFilters";
import "../../components/Filters/filters.css"

const str_fiction =
  "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories.";

function ExploreFiction() {

  const [books, setBooks] = useState( [] );
  const [genres, setGenres] = useState( [] );
  var query = '';
  
  useEffect(() => {
    const axiosBooks = async () => {
      const response = await axios(`http://localhost:5000/books/find?fiction=true${query}`);
      setBooks(response.data);
      genres.map(genre => query = '&' + query + genre + '=true')
    };
    //query = query.slice(0, -1) 
    axiosBooks();
  }, [query]);
  
    return (
      <div>
        <Header />
        <Navbar />
        <TopBar name="Shop Fiction" value={str_fiction}></TopBar>
        <div style={{ "margin-bottom": "5%" }}>
          <div style={{ display: "flex" }}>
            <div className="filters">
              <GenreFilters getFilter = {setGenres}></GenreFilters>
              <p>{genres[0]}</p>
              <p></p>
              <p></p>
              <PriceFilters></PriceFilters>
            </div>
            <div style={{ display: "flex", "flex-wrap": "wrap" }}>
            {books && books.map((book) => (

<ProductCard props = {book} ></ProductCard>
))} 
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }


export default ExploreFiction;
