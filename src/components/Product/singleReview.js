import React from "react";
import img from './4stars.png'
import './singleReview.css'

const reviewText = "If you’re thinking about reading this, stop thinking, just read it. It’s brilliant. It’s a book I will definitely be reading again because it is just so thought provoking and disturbing. Margaret Atwood is truly a genius."
class SingleReview extends React.Component {
    render() {
        return (
            <div className="single-review">
                <img className="four-star" src = {img}/>
                <p className = "review-date">29-06-2022</p>
                <h1 className = "review-heading">Fantastic Read</h1>
                <p className = "user-name">User 01</p>
                <h2 className = "review-text">{reviewText}</h2>
            </div>


        );
    }
}

export default SingleReview;