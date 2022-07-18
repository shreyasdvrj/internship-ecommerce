import React from "react";
import ReviewSummary from "./reviewSummary";
import SingleReview from "./singleReview";

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="review-section">
        <ReviewSummary></ReviewSummary>
        <SingleReview rating={this.props.rating}></SingleReview>
        <p>
          <a href="/postReview" style={{ color: "black" }}>
            Rate this book
          </a>
        </p>
      </div>
    );
  }
}

export default ReviewSection;
