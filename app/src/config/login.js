import Axios from "axios";
const authLogin = (user) => {
  return Axios.post("http://fulpibackend.ngrok.io/auth/signin", user)   
};
export default  authLogin;