import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login/Login";
import WriterRegister from "./components/writerRegister/Writer";
import reportWebVitals from "./reportWebVitals";
import Writer from "./components/postHistory/HistoryPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ErrorPage from "./pageError";
import { isAuthenticate ,isWriter} from "./config/auth";

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
        <Redirect
          to={{ pathname: "/writer/register", state: { from: props.location } }}
        />
      )
    }
  />
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <PrivateRouter path="/app" component={App} />{" "}
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/writer/register">
          <WriterRegister />
        </Route>
        <PrivateRouterWriter path="/writer" component={Writer} />{" "}
        
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
