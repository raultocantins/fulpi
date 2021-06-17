import Axios from "axios";
import {development} from './url'
const authLogin = (user) => {
  return Axios.post(`${development}/auth/signin`, user)   
};
export default  authLogin;