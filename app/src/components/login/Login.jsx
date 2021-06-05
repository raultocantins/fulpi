import React from "react";
import "./Login.css";
import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import FunctionsIcon from "@material-ui/icons/Functions";
export default class Login extends React.Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <div className="login">
        <div className="logo">
          <h1>FulpiBooks</h1>
        </div>
        <div className="boxLogin">
          <h1>Sign In</h1>
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>
            {this.state.loading ? <CircularProgress id="loading" /> : "Sign In"}
          </button>
          <div className="help">
            <Checkbox />
            Remember me
          </div>
          <div className="groupButtons">
            <IconButton aria-label="delete">
              Sign in with google <FunctionsIcon />
            </IconButton>{" "}
          </div>

          <a href="/">Need help?</a>
        </div>
      </div>
    );
  }
}
