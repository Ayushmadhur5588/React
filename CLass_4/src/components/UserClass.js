import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.Name + "constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.Name + " componentdidmount");
  }

  render() {
    console.log(this.props.Name + "render");

    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="User">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter
        </button>
        <h3>Name : {this.props.Name}</h3>
        <h3>Location : Delhi, India</h3>
        <h3>Email : ayush.bhardwaj5588@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
