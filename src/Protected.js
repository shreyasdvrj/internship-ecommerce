import { Route, useHistory } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    const navigate = useHistory();
    console.log("protected", isLoggedIn);
  if (!isLoggedIn) {
    return navigate.push('/login');
  }
  return children;
};
export default Protected;
