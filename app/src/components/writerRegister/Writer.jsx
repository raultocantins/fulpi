import React from "react";
import "./Writer.css";
import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import FunctionsIcon from "@material-ui/icons/Functions";
import AuthLoginWriter from "../../config/loginWriter.js";
import AuthRegister from "../../config/register";
import { isAuthenticate } from '../../config/auth'
import CreateIcon from "@material-ui/icons/Create";
export default class Writer extends React.Component {
  state = {
    loading: false,
    register: true,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
    this.submit = this.submit.bind(this);
    this.register = this.register.bind(this);
  }

  toggleStep() {
    this.setState({ register: !this.state.register });
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }
  handleChange = (input) => (e) => {
    var low_text = e.target.value.toLowerCase();
    this.setState({ [input]: low_text });
  };

  submit() {
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email) ||
      this.state.password === ""
    ) {
      alert("email inválido!");
    } else {
      this.setState({ loading: true });
      var user = {
        email: this.state.email,
        password: this.state.password,
        writer: true
      };
      AuthLoginWriter(user)
        .then((res) => {
          var dataUser = JSON.stringify(res.data);
          window.localStorage.setItem("token", dataUser);
          window.location.href = "/app";
        })
        .catch((err) => {
          console.log(err);
          alert("error");
          this.setState({ loading: false });
        });
    }
  }
  register() {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ loading: true });
      var user = {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        writer: true
      };
      AuthRegister(user)
        .then((res) => {
          this.setState({ loading: false });
          this.toggleStep();
        })
        .catch((err) => {
          this.setState({ loading: false });
          alert("error");
          console.log(err);
        });
    } else {
      alert("Senhas não são iguais!!");
    }
  }
  render() {
    return (
      <div className="registerWriter">
        <div className="logo">
          <h1>
            FulpiBooks
            <CreateIcon style={{ fontSize: "70px" }} />
          </h1>
        </div>
        <div className="boxLogin">
          {this.state.register ? (
            <React.Fragment>
              <h1>Sign Up</h1>{" "}
              <input
                name="name"
                placeholder="Nome completo"
                onChange={this.handleChange("name")}
                value={this.state.name}
              />
              <input
                name="email"
                placeholder="Email"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange("confirmPassword")}
                value={this.state.confirmPassword}
              />
              <button onClick={this.register}>
                {this.state.loading ? (
                  <CircularProgress id="loading" />
                ) : (
                  "Sign up"
                )}
              </button>
              <div className="groupButtons">
                <IconButton>
                  Sign up with google <FunctionsIcon />
                </IconButton>{" "}
                <IconButton onClick={this.toggleStep}>
                  Já possui uma conta fulpibooks?
                </IconButton>{" "}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1>Sign In</h1>
              <input
                name="email"
                placeholder="Email"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
              <button onClick={this.submit}>
                {this.state.loading ? (
                  <CircularProgress id="loading" />
                ) : (
                  "Sign In"
                )}
              </button>
              <div className="help">
                <Checkbox />
                Remember me
              </div>
              <div className="groupButtons">
                <IconButton>
                  Sign in with google <FunctionsIcon />
                </IconButton>{" "}
                <IconButton onClick={this.toggleStep}>
                  Não possui uma conta?
                </IconButton>{" "}
              </div>
            </React.Fragment>
          )}

          <a href="/">Need help?</a>
        </div>
      </div>
    );
  }
}
