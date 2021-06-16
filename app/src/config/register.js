import Axios from "axios";
const authRegister = (user) => {
  return Axios.post("http://fulpibackend.ngrok.io/auth/register/user", user)   
};
export default  authRegister;