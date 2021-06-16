import Axios from "axios";
const authLoginWriter = (user) => {
  return Axios.post("http://fulpibackend.ngrok.io/auth/signin/writer", user)   
};
export default  authLoginWriter;