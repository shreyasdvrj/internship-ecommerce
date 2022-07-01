import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import img from "../Product/bookimgAsProduct.jpg";

export default function OrderCard() {
  return (
    <div style={{ marginBottom: "20px;" }}>
      <MDBCard style={{ maxWidth: "30vw"}}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage src={img} alt="..." fluid />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>Title</MDBCardTitle>
              <MDBCardText>Text</MDBCardText>
              <MDBCardText>
                <small className="text-muted">abcd</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}

// import { Component } from "react";
// import "./orderCard.css";
// import { Link } from "react-router-dom";

// class OrderCard extends Component {
//   render() {
//     return (
//       <div className="product-card">
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to={`/product/${this.props.name}`}
//         >
//           <div
//             style={{ backgroundImage: `url(${this.props.image})` }}
//             className="product-card-img"
//             width="80%"
//           />
//           <h3>{this.props.title}</h3>
//           <h5>₹{this.props.price} </h5>
//         </Link>
//         <Link className="details-link" to={`/product/${this.props.id}`}>
//           Details
//         </Link>
//       </div>
//     );
//   }
// }

// export default OrderCard;
