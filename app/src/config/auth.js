//import Axios from "axios";
const isAuthenticate = () => {
  var userToken = JSON.parse(window.localStorage.getItem("token"));
  // Axios.defaults.headers.common["Authorization"] = `Bearer ${userToken.token}`;

  if (userToken?.token) {
    return true;
  } else {
    return false;
  }
};
const isWriter = () => {
  var userToken = JSON.parse(window.localStorage.getItem("token"));
  if (userToken.writer ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isWriter,
  isAuthenticate,
};
