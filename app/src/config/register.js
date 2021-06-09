import Axios from "axios";
const authRegister = (user) => {
  return Axios.post("http://localhost:4000/auth/register/user", user)   
};
export default  authRegister;