import React, { Component } from "react";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidenav";
import FooterPage from "../../components/Footer/footer";

import TopBar from "../../components/TopBar/topBar";
class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <TopBar name="Your Account"></TopBar>
        <Sidebar style={{'margin-left': '5%'}}/>
        <FooterPage />
      </div>
    );
  }
}

export default Profile;
