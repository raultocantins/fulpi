import Axios from "axios";
import {development} from './url'
const authLoginWriter = (user) => {
  return Axios.post(`${development}/auth/signin/writer`, user)   
};
export default  authLoginWriter;