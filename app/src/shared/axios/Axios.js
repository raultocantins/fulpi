import Axios from 'axios'
var userToken = JSON.parse(window.localStorage.getItem("token"));
if(userToken?.token){
    Axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userToken.token}`;
}
export default Axios;