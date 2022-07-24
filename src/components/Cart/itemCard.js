import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import img from "../../assets/logo.png";
import axios from 'axios';

const Itemcard = ({ props }) => {
  const bookid = {}
  bookid["bookid"] = props;
  console.log(bookid)
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:5000/books/bookid",
      data: { "bookid": props },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res)
        setBook(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ marginBottom: "20px;" }}>
      <MDBCard style={{ maxWidth: "30vw" }}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage src={book.coverImg} alt="..." fluid />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{book.title}</MDBCardTitle>
              <MDBCardText>{book.price}</MDBCardText>
              <MDBCardText>
                <small className="text-muted">{1}</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};

export default Itemcard;
