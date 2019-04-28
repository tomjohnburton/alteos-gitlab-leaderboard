import React, { Component } from "react";

export default class MergeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { iid, source_branch } = this.props.mergeRequests;

    return (
      <div className="merge-card">
        <h1>{iid}</h1>
        <h1>{source_branch}</h1>
      </div>
    );
  }
}
