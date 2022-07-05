import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Waves from "../../components/Wave/wave";
import "../Login/login.css";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("firstname", user.firstname);
    loginFormData.append("lastname", user.lastname);
    loginFormData.append("email", user.email);
    loginFormData.append("password", user.password);
    loginFormData.append("password2", user.password2);
    console.log(loginFormData);
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "localhost:5000/api/register",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //register function
  const egister = () => {
    const { firstname, lastname, email, password, password2 } = user;
    console.log(user);
    toast("Register!");
    if (firstname && lastname && email && password && password2) {
      axios({
        method: "POST",
        url: "http://localhost:5000/api/register",
        data: user,
        headers: { "Content-Type": "application/json" },
      }).then((res) => toast("Success"));
    } else {
      alert("invalid input");
    }
  };
  return (
    <div>
      <Header />
      <Navbar />
      <br />
      <div className="Form">
        <CDBContainer>
          <CDBCard style={{ width: "50%" }}>
            <CDBCardBody className="mx-4">
              <div
                className="text-center text-white"
                style={{ background: "#1F7A8C" }}
              >
                <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
              </div>
              <form action="#">
                <CDBInput
                  material
                  name="firstname"
                  placeholder="Firstname"
                  type="text"
                  value={user.firstname}
                  onChange={handleChange}
                />
                <CDBInput
                  material
                  name="lastname"
                  placeholder="Lastname"
                  type="text"
                  value={user.lastname}
                  onChange={handleChange}
                />
                <CDBInput
                  material
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <CDBInput
                  material
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <CDBInput
                  material
                  name="password2"
                  placeholder="Confirm Password"
                  type="password"
                  value={user.password2}
                  onChange={handleChange}
                />

                <CDBBtn
                  color="dark"
                  outline
                  className="btn-block my-3 mx-auto"
                  onClick={egister}
                >
                  Register
                </CDBBtn>
              </form>
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
        <ToastContainer />
      </div>
      <br />
      <Waves />
      <Footer />
    </div>
  );
};

export default Signup;
