import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login/Login";
import WriterRegister from "./components/writerRegister/Writer";
import reportWebVitals from "./reportWebVitals";
import Writer from "./components/postHistory/HistoryPage";
import { Provider } from "react-redux";
import store from "./store/store";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { isAuthenticate, isWriter } from "./config/auth";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3500,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.FADE,
  containerStyle:{fontSize:"15px"}
};

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);
const PrivateRouterWriter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isWriter() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/writer/register" }} />
      )
    }
  />
);
const RouterError = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() ? (
        <Redirect to={{ pathname: "/app" }} />
      ) : (
        <Redirect to={{ pathname: "/signin" }} />
      )
    }
  />
);

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Switch>
          <Provider store={store}>
            <RouterError path="/" exact />
            <PrivateRouter path="/app" component={App} />{" "}
            <Route path="/signin">
              <Login />
            </Route>
            <PrivateRouterWriter path="/writer" component={Writer} />{" "}
            <Route path="/writer/register">
              <WriterRegister />
            </Route>
          </Provider>
        </Switch>
      </Router>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
