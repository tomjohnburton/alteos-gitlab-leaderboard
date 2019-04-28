import React, { Component } from "react";

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="user-card">
        <div className="container">
          <div className="avatar">
            <img src={this.props.user.avatar_url} alt="cool" />
          </div>
          <div className="user-card-name">{this.props.user.name}</div>
        </div>
        <div className="user-card-approvals">
          <img src="/merge.svg" alt="" />
          <h2>4</h2>
        </div>
      </div>
    );
  }
}
