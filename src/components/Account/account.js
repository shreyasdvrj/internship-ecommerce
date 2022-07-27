import React from "react";
import axios from "axios";
import "./account.css";

const Account = () => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/users/verify",
      withCredentials: true,
    }).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Profile Details</h2>
      <hr />
      <br />
      <div className="detail">
        <div className="detail-item">
          <h5 className="square border border-4 px-4 py-2">Email</h5>
          <h5 className="square border border-4 px-4 py-2">{user.email}</h5>
        </div>
        <br />
        <div className="detail-item">
          <h5 className="square border border-4 px-4 py-2">Username</h5>
          <h5 className="square border border-4 px-4 py-2">{user.username}</h5>
        </div>
        <br />

        <div className="detail-item">
          <h5 className="square border border-4 px-4 py-2">Joined</h5>
          <h5 className="square border border-4 px-4 py-2">
            {String(user.createdAt).slice(0, 10)}
          </h5>
        </div>
        <br />
      </div>
      <br/>
      <h2>Recently Viewed</h2>
      <hr />
      <br />
    </div>
  );
};

export default Account;
