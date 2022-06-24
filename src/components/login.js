import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
import Waves from "./wave"
import "./login.css"

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <br />
        <div className="Form">
        <CDBContainer>
          <CDBCard className="Card" style={{ width: "50%" }}>
            
            <CDBCardBody className="mx-4">
            <div
              style={{ background: "#3dcd5b" }}
              className="text-center text-white"
            >
              <p className="h5 mt-2 py-4 font-weight-bold">Sign in</p>
            </div>
              <CDBInput label="Email" placeholder="Email" type="email" />
              <CDBInput
                label="Password"
                placeholder="Password"
                type="password"
              />
              <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
                <CDBLink to="#">Forgot Password ?</CDBLink>
              </div>
              <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
                Sign in
              </CDBBtn>
              <p className="text-center">
                Not a member?{" "}
                <CDBLink className="d-inline p-0" to="/signup">
                  Register
                </CDBLink>
              </p>
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

export default Login;
