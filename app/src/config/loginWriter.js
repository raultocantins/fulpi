import Axios from "axios";
const authLoginWriter = (user) => {
  return Axios.post("http://localhost:4000/auth/signin/writer", user)   
};
export default  authLoginWriter;