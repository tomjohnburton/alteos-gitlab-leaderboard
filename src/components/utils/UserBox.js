import React, { Component, Fragment } from "react";
import UserCard from "./UserCard";
import api from "../../api";

export default class UserBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }

  componentDidMount = () => {
    api
      .getUsers()
      .then(result => {
        this.setState({ users: result.data });
      })
      .then(() => {
        console.log("users received");
      });
  };

  renderUsers = () => {
    if (this.state.users === null) {
      return <div>Loading</div>;
    }
    return this.state.users.map((user, i) => <UserCard key={i} user={user} />);
  };

  render() {
    return <div className="user-box">{this.renderUsers()}</div>;
  }
}
