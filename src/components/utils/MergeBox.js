import React, { PureComponent } from "react";
import MergeCard from "./MergeCard";
import api from "../../api";

export default class MergeBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mergeRequests: null
    };
  }

  componentDidMount() {
    api.getGroupMergeRequests().then(result => {
      this.setState({ mergeRequests: result.data });
    });
  }

  renderMergeRequests = () => {
    if (this.state.mergeRequests === null) {
      return <div>Loading</div>;
    }
    return this.state.mergeRequests.map(mergeRequest => {
      return <MergeCard mergeRequests={mergeRequest} />;
    });
  };

  render() {
    return <div className="merge-box">{this.renderMergeRequests()}</div>;
  }
}
