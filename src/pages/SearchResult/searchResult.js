import React, { useState, useEffect } from 'react';
import SearchBar from "../../components/Searchbar/searchBar";
import ProductCard from "../../components/Product/productCard";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";

const str = "Search Results"
const SearchResult = (props) => {
  const [input, setInput] = useState('');
  const [bookListDefault, setBookListDefault] = useState();
  const [bookList, setBookList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:5000/books/search')
      .then(response => response.json())
      .then(data => {
         setBookList(data) 
         setBookListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = bookListDefault.filter(book => {
      return book.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setBookList(filtered);
  }

  
  useEffect( () => {fetchData()},[]);

  return (
    <div>
      <Header />
      <Navbar />
      <TopBar name="Shop All Books" value={str}></TopBar>
      <div style={{ "margin-bottom": "5%" }}>
        <div style={{ display: "flex" }}>
        {/* <SearchBar 
       input={input} 
       onChange={updateInput}
      /> */}
      {/* <input 
     style = {{}}
     key="random1"
     value={keyword}
     placeholder={"Search"}
     onChange={(e) => (e.target.value)}
    /> */}
      {console.log(bookList)}
          {/* <div style={{ display: "flex", "flex-wrap": "wrap" }}>

            {bookList &&
              bookList.map((book) => <ProductCard props={book}></ProductCard>)}
          </div> */}
        </div>
      </div>
      
      <FooterPage />
    </div>
  );
}

export default SearchResult;
