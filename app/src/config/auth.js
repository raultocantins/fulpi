//import Axios from "axios";
const isAuthenticate = () => {
  //var userToken = JSON.parse(window.localStorage.getItem("token"));
  // Axios.defaults.headers.common["Authorization"] = `Bearer ${userToken.token}`;
  /*
  if(userToken?.token){
 return true;
  }else{
     return false;
  }
  */
  return true;
};
const isWriter = () => {
  var userToken = JSON.parse(window.localStorage.getItem("token"));
  if (userToken?.writer === true) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isWriter,
  isAuthenticate,
};
