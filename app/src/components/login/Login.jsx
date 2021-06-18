import { React, useEffect, useState } from "react";
import Axios from 'axios'
import "./Login.css";
import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import FunctionsIcon from "@material-ui/icons/Functions";
import AuthRegister from "../../config/register";
import { isAuthenticate } from "../../config/auth";
import { useDispatch } from "react-redux";
import { development } from "../../config/url";

function signIn(user) {
  window.location.href = "/app";
  return { type: "SIGNIN_USER", user };
}
const Login = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  useEffect(() => {
    if (isAuthenticate()) {
      window.location.href = "/app";
    }
  }, []);
  function toggleStep() {
    setRegister(!register);
    setName("");
    setEmail("");
    setPassword("");
    setPassword("");
  }
  function submit() {
    setLoading(true);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password === "") {
      alert("email inválido!");
    } else {

      Axios.post(`${development}/auth/signin`, { email, password })
        .then((res) => {

          var dataUser = JSON.stringify(res.data);
          window.localStorage.setItem("token", dataUser);
          dispatch(signIn(res.data));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(err);
          console.log(err);
        });
    }
  }
  function registerUser() {
    if (password === confirmPassword) {
      setLoading(true);
      var user = {
        name: name,
        password: password,
        email: email,
        writer: false,
      };
      AuthRegister(user)
        .then((res) => {
          setLoading(false);
          toggleStep();
        })
        .catch((err) => {
          setLoading(false);
          alert("error");
          console.log(err);
        });
    } else {
      alert("Senhas não são iguais!!");
    }
  }

  return (
    <div className="login">
      <div className="logo">
        <h1>FulpiBooks</h1>
      </div>
      <div className="boxLogin">
        {register ? (
          <>
            <h1>Sign Up</h1>{" "}
            <input
              name="name"
              placeholder="Nome completo"
              onChange={(value) => setName(value.target.value)}
              value={name}
            />
            <input
              name="email"
              placeholder="Email"
              onChange={(value) => setEmail(value.target.value)}
              value={email}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(value) => setPassword(value.target.value)}
              value={password}
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(value) => setConfirm(value.target.value)}
              value={confirmPassword}
            />
            <button onClick={registerUser}>
              {loading ? <CircularProgress id="loading" /> : "Sign up"}
            </button>
            <div className="groupButtons">
              <IconButton>
                Sign up with google <FunctionsIcon />
              </IconButton>{" "}
              <IconButton onClick={toggleStep}>
                Já possui uma conta?
              </IconButton>{" "}
            </div>
          </>
        ) : (
          <>
            <h1>Sign In</h1>
            <input
              name="email"
              placeholder="Email"
              onChange={(value) => setEmail(value.target.value)}
              value={email}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(value) => setPassword(value.target.value)}
              value={password}
            />
            <button onClick={submit}>
              {loading ? <CircularProgress id="loading" /> : "Sign In"}
            </button>
            <div className="help">
              <Checkbox />
              Remember me
            </div>
            <div className="groupButtons">
              <IconButton>
                Sign in with google <FunctionsIcon />
              </IconButton>{" "}
              <IconButton onClick={toggleStep}>
                Não possui uma conta?
              </IconButton>{" "}
            </div>
          </>
        )}

        <a href="/writer/register">Want to be a writer?</a>
      </div>
    </div>
  );
};
export default Login;
