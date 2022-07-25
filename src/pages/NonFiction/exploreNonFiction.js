import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard";
import axios from "axios";
import PriceFilters from "../../components/Filters/priceFilters";
import GenreFilters from "../../components/Filters/genreFilters";
import "../../components/Filters/filters.css";

const str_nonfiction =
  "Pick from heart-felt memoirs, thought provoking histories and self-help books.";
function ExploreNonFiction() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState("");
  var [query, setQuery] = useState("");

  useEffect(() => {
    const axiosBooks = async () => {
      // genres.map(genre => setQuery(query+`&${genre}=true`))
      //console.log("genre is ",genres)

      const response = await axios(
        `http://localhost:5000/books/find?fiction=false${genres}`
      );
      setBooks(response.data);
      // console.log(query)
      // genres.map(genre => query = '&' + query + genre + '=true')
    };
    //query = query.slice(0, -1)
    axiosBooks();
  }, [genres]);

  return (
    <div>
      <Header />
      <Navbar />
      <TopBar name="Shop Non Fiction" value={str_nonfiction}></TopBar>
      <div style={{ "margin-bottom": "5%" }}>
        <div style={{ display: "flex" }}>
          <div className="filters">
            <GenreFilters getFilter={setGenres}></GenreFilters>
            <p></p>
            <p></p>
            <p></p>
            <PriceFilters></PriceFilters>
          </div>
          <div style={{ display: "flex", "flex-wrap": "wrap" }}>
            {books &&
              books.map((book) => <ProductCard props={book}></ProductCard>)}
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default ExploreNonFiction;
