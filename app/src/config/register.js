import Axios from "axios";
import {development} from './url'
const authRegister = (user) => {
  return Axios.post(`${development}/auth/register/user`, user)   
};
export default  authRegister;