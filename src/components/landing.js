import React from "react";
import './landing.css'

class Landing extends React.Component {
  render() {
    return (
        <div className="firstpage">
        <div className="text">
        "Today a reader, tomorrow a leader"<br/>
                 - Margaret Fuller
                 <br/>
                 <button className="b1">EXPLORE FICTION</button>
                 <button className="b2">EXPLORE NON-FICTION</button>
        
        </div>
        </div>
    );
  }
}

export default Landing;
