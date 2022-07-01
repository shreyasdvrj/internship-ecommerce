import React, { Component } from "react";
import "./profile.css"

import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidenav";
import User from "../../components/User/user";
import FooterPage from "../../components/Footer/footer";

import TopBar from "../../components/TopBar/topBar";
class Profile extends Component {
  render() {
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
}

export default Profile;
