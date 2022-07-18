import React from "react";
import axios from "axios";
import { CDBInput, CDBContainer } from "cdbreact";
import Form from "react-bootstrap/Form";

const Account = () => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/users/verify",
      withCredentials: true,
    }).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      <CDBContainer>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder={post.username} disabled />
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder={post.email} disabled />
        </Form.Group>
      </CDBContainer>
    </div>
  );
};

export default Account;
