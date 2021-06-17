import { React, useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./Newlogin.css";
function signIn(user) {
  window.location.href="/app"
  return { type: "SIGNIN_USER", user };
}



const NewLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function signInUser() {
    Axios.post(`http://fulpibackend.ngrok.io/auth/signin`, { email, password })
      .then((res) => {
        var dataUser = JSON.stringify(res.data);
        window.localStorage.setItem("token", dataUser); 
        dispatch(signIn(res.data));
      
      })
      .catch((err) => {
          alert('error')
        console.log(err);
      });
  }


  return (
    <div className="newlogin">
      <input
        placeholder="email"
        onChange={(value) => setEmail(value.target.value)}
      />
      <input
        placeholder="password"
        onChange={(value) => setPassword(value.target.value)}
      />
      <button onClick={signInUser}>Login</button>
      <h1>novo login</h1>
    </div>
  );
};
export default NewLogin;
