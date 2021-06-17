import Axios from "axios";
import {development} from './url'
import {  useDispatch } from 'react-redux';
function signIn(data) {
  return { type: 'SIGNIN_USER', data }
}
export default function(){
  const dispatch = useDispatch();
 /* Axios.post(`${development}/auth/signin`, user).then(res=>{
alert("a")
  }).catch(err=>{
    console.log(err)
  })*/
  dispatch(signIn({id:0,name:"alex",email:"alexbraul.ar@gmail.com"}))
};
