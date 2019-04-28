import "./App.css";
import UserBox from "./utils/UserBox";
import MergeBox from "./utils/MergeBox";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="user-title-container">
          <div className="title">
            <img src="/gitlab-icon-rgb.png" alt="" />
          </div>
          <div className="user">
            <UserBox />
          </div>
        </div>
        <div className="merge-request-container">
          <MergeBox className="merge-box" />
        </div>
      </div>
    );
  }
}
