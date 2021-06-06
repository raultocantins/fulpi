import React from "react";
import "./Login.css";
import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import FunctionsIcon from "@material-ui/icons/Functions";
export default class Login extends React.Component {
  state = {
    loading: false,
    register: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
    this.submit = this.submit.bind(this);
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
      setTimeout(() => {
        this.setState({ loading: false });
        alert("passou!!!");
      }, 3000);
    }
  }
  render() {
    return (
      <div className="login">
        <div className="logo">
          <h1>FulpiBooks</h1>
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
              <button onClick={this.submit}>
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
                  Já possui uma conta?
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
