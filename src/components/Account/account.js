import React from "react";
import { CDBInput, CDBContainer } from "cdbreact";

class Account extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <CDBContainer>
        <CDBInput disabled="true" type="email" placeholder="Username" />
        <CDBInput disabled="true" type="email" placeholder="Email" />
         
        </CDBContainer>
      </div>
    );
  }
}

export default Account;
