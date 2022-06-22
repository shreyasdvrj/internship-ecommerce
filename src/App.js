import './App.css';
import Header from './components/header';
import React from 'react';
import TopBar from './components/topBar';
import Bestsellers from './components/bestsellers';



const str_fiction = "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories."
const str_nonfiction = "Pick from heart-felt memoirs, thought provoking histories and self-help books."
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="firstpage">
      <div className="text">
      "Today a reader, tomorrow a leader"<br/>
               - Margaret Fuller
               <br/>
               <button className="b1">EXPLORE FICTION</button>
               <button className="b2">EXPLORE NON-FICTION</button>
      
      </div>
      </div>
      <Bestsellers></Bestsellers>
    </div> 
  );
}

export default App;

