import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Amber",
        location: "Lucknow",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/amber1405");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
