import Axios from "axios";
require("dotenv").config();

const api = Axios.create({
  baseURL: "https://gitlab.com/api/v4",
  headers: { "PRIVATE-TOKEN": process.env.REACT_APP_GITLAB_TOKEN }
});

export default {
  service: api,
  getGroupMergeRequests() {
    return api
      .get("/groups/2797854/merge_requests")
      .then(res => {
        if (res.status === 200) {
          JSON.stringify(res.data);
        }
        return res;
      })
      .catch(error => {
        return error;
      });
  },
  getUsers() {
    return api
      .get("groups/2797854/members")
      .then(res => {
        if (res.status === 200) {
          JSON.stringify(res.data);
        }
        return res;
      })
      .catch(error => {
        return error;
      });
  }
};
