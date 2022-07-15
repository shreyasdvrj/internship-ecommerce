import React, { useState } from "react";
import "./profile.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidenav";
import User from "../../components/User/user";
import FooterPage from "../../components/Footer/footer";

import TopBar from "../../components/TopBar/topBar";
import Login from "../Login/login";
const Profile = () => {
  const history = useHistory();
  axios({
    method: "GET",
    url: "http://localhost:5000/users/verify",
    withCredentials: true,
  })
    .then((res) => {
      console.log("Works with res");
      var auth = res.data;
      // console.log("token",token)
      console.log("auth", auth);
      // if (res.data) {
      //   console.log("In if")
      //   return (
      //     <div>
      //       hello
      //       <Header />
      //       <Navigation />
      //       <TopBar name="Your Account"></TopBar>
      //       <div className="profileContent">
      //         <Sidebar />
      //       </div>
      //       <FooterPage />
      //     </div>
      //   );
      // }
      // else {
      //   console.log(res.data);
      //   console.log("Login pushed")
      //   history.push("/login");
      // }
    })
    .catch((res, error) => {
      console.log("Problem ", res, error);
    });
  var auth = true;
  return (
    // <div>
    //   {auth ? (
    //     <>
    //     <Header />
    //     <Navigation />
    //     </>
    //   ) : (
    //     <Login />
    //   )}
    // </div>
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
};

// ReactDOM.render(
//   <Profile />,
//   document.getElementById('root'));
export default Profile;
