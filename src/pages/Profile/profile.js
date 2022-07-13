import React, { Component } from "react";
import "./profile.css"
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidenav";
import User from "../../components/User/user";
import FooterPage from "../../components/Footer/footer";

import TopBar from "../../components/TopBar/topBar";
const Profile = () => {
  const history = useHistory();
  axios({
    method: "GET",
    url: "http://localhost:5000/users/verify",
    withCredentials: true,
  })
    .then((res) => {
      console.log("Works with res")
      console.log(res)
      if (res.data) {
        return (
          <div>
            <Header />
            <Navigation />
            <TopBar name="Your Account"></TopBar>
            <div className="profileContent">
              <Sidebar />
            </div>
            <FooterPage />
          </div>
        );
      }
      else {
        console.log(res.data);
        console.log("Login pushed")
        history.push("/login");
      }
      
    })
    .catch((res,error) => {
      console.log("Problem ", res, error);
    });
   

}

export default Profile;
