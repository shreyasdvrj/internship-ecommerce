import React from "react";
import Wave from "react-wavify";

class Waves extends React.Component {
  render() {
    return (
      <div id="wave">
        <Wave style={{ zIndex: 10 }} options={{ speed: 0.5 }} fill="#d1dccc" />
      </div>
    );
  }
}

export default Waves;
