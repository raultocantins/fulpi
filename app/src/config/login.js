import Axios from "axios";
const authLogin = (user) => {
  return Axios.post("http://localhost:4000/auth/signin", user)   
};
export default  authLogin;