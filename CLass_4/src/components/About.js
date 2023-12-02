import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("ABout componentdidmount");
  }

  render() {
    console.log("About render");

    return (
      <div className="about_us">
        <h2>About Us</h2>

        <UserClass Name={"First_Child"} />
        <UserClass Name={"Second_Child"} />
      </div>
    );
  }
}

export default About;
