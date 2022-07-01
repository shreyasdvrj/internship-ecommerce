import React from "react";
import { CDBInput, CDBContainer } from "cdbreact";

class Account extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <CDBContainer>
        <CDBInput disabled="true" type="email" placeholder="Your E-mail" />
          <CDBInput
            placeholder="Email"
            type="email"
            icon={<i className="fa fa-email text-dark"></i>}
          />
        </CDBContainer>
      </div>
    );
  }
}

export default Account;
