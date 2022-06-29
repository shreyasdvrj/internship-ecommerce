import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
import Waves from "../../components/Wave/wave"
import "../../pages/Login/login.css"

class PostReview extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <br />
        <div className="Form">
        <CDBContainer>
          <CDBCard className="Post Rating" style={{ width: "50%" }}>
            
            <CDBCardBody className="mx-4">
            <div
              style={{ background: "#1F7A8C" }}
              className="text-center text-white"
            >
              <p className="h5 mt-2 py-4 font-weight-bold">Post Review</p>
            </div>
              <CDBInput label="Review Title" placeholder="Review Title" type="text" />
              <CDBInput
                label="Review Description"
                placeholder="Review Description"
                type="textarea"
              />
             <div>
              <CDBBtn color="dark" outline className="btn-block my-3 mx-auto align-items-center ">
                Post Review
              </CDBBtn>
              </div>
              <hr />
            </CDBCardBody>
          </CDBCard>
        </CDBContainer>
        </div>
        <br />
        <Waves />
        <Footer />
      </div>
    );
  }
}

export default PostReview;
