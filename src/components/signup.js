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
import Waves from './wave'
import "./login.css"

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <br />
        <div className="Form">
        <CDBContainer>
          <CDBCard style={{ width: "30rem" }}>
            <CDBCardBody className="mx-4">
              <div
                className="text-center text-white"
                style={{ background: "#3dcd5b" }}
              >
                <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput
                    material
                    hint="First name"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div className="col">
                  <CDBInput
                    material
                    hint="Last name"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>
              <CDBInput
                material
                hint="E-mail"
                placeholder="Email"
                type="email"
              />
              <CDBInput
                material
                hint="Password"
                placeholder="Password"
                type="password"
              />

<CDBBtn color="dark" outline className="btn-block my-3 mx-0">
                Sign in
              </CDBBtn>
              <p className="text-center m-0">
                Already have an account?{" "}
                <CDBLink className="d-inline p-0" to="/login">
                  Sign In
                </CDBLink>
              </p>
              <hr />
              <p className="text-center">
                By clicking <em>Sign up</em> you agree to our{" "}
                <CDBLink className="d-inline p-0" to="#">
                  terms of service
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

export default Signup;
