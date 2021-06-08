import Axios from "axios";
const authLogin = (user) => {
  return Axios.post("http://localhost:4000/auth/signinteste", user)   
};
export default  authLogin;