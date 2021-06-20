import React, { useState } from "react";
import "./Writer.css";
import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import FunctionsIcon from "@material-ui/icons/Functions";
import AuthLoginWriter from "../../config/loginWriter.js";
import AuthRegister from "../../config/register";
import CreateIcon from "@material-ui/icons/Create";
import { useAlert } from "react-alert";

const Writer = () => {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

  function toggleStep() {
    setRegister(!register);
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  }

  function submit() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert.show("Email inválido!");
    } else if (password.length < 8) {
      alert.show("Password inválido!");
    } else {
      setLoading(true);
      var user = {
        email: email,
        password: password,
        writer: true,
      };
      AuthLoginWriter(user)
        .then((res) => {
          var dataUser = JSON.stringify(res.data);
          window.localStorage.setItem("token", dataUser);
          window.location.href = "/writer";
        })
        .catch((err) => {
          console.log(err);
          alert.error("erro ao tentar fazer login!");
          setLoading(false);
        });
    }
  }

  function registerUser() {
    if (name.length < 6) {
      alert.show("name não inserido");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email === "") {
      alert.show("email não inserido/inválido");
    } else if (password.length < 8) {
      alert.show("password não inserido");
    } else if (confirmPassword.length < 8) {
      alert.show("confirm password não inserido");
    } else if (password === confirmPassword) {
      setLoading(true);
      var user = {
        name: name,
        password: password,
        email: email,
        writer: true,
      };
      AuthRegister(user)
        .then((res) => {
          setLoading(false);
          alert.success("Register Success!");
          toggleStep();
        })
        .catch((err) => {
          setLoading(false);
          alert("error");
          console.log(err);
        });
    } else {
      alert.error("Senhas não são iguais!!");
    }
  }

  return (
    <div className="registerWriter">
      <div className="logo">
        <h1>
          FulpiBooks
          <CreateIcon style={{ fontSize: "70px" }} />
        </h1>
      </div>
      <div className="boxLogin">
        {register ? (
          <React.Fragment>
            <h1>Sign Up</h1>{" "}
            <input
              name="name"
              placeholder="Full name"
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
                already have a fulpibooks account?
              </IconButton>{" "}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
                Don't have an account?
              </IconButton>{" "}
            </div>
          </React.Fragment>
        )}

        <a href="/">Need help?</a>
      </div>
    </div>
  );
};

export default Writer;
