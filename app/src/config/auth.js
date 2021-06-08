//import Axios from "axios";
export const isAuthenticate = () => {
  var userToken = JSON.parse(window.localStorage.getItem("token"));
 // Axios.defaults.headers.common["Authorization"] = `Bearer ${userToken.token}`;

 /* Axios.post("http://localhost:4000/validateToken")
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });*/
    if(userToken!=null && userToken.token){
      return true
    }else{
      return false
    }
};
