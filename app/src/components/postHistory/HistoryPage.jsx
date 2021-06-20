import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreateIcon from "@material-ui/icons/Create";
import MovieRow from "../movieRow/MovieRow";
import AppsIcon from "@material-ui/icons/Apps";
import CloseIcon from "@material-ui/icons/Close";
import LoopIcon from "@material-ui/icons/Loop";
import "./HistoryPage.css";

//Components
import Newbook from "./components/Newbook";

export default class HistoryPage extends React.Component {
  state = {
    toggleMenu: false,
  };
  constructor(props) {
    super(props);
    this.toggleMenuMobile = this.toggleMenuMobile.bind(this);
  }

  toggleMenuMobile() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }
  logout() {
    window.localStorage.removeItem("token");
    document.location.href = "/signin";
  }
  toApp() {
    window.location.href = "/app";
  }
  render() {
    return (
      <div className="historyPage">
        <div className="appbar">
          <h1>
            FulpiBooks <CreateIcon />
          </h1>

          {this.state.toggleMenu ? (
            <CloseIcon className="iconMobile" onClick={this.toggleMenuMobile} />
          ) : (
            <AppsIcon className="iconMobile" onClick={this.toggleMenuMobile} />
          )}

          {this.state.toggleMenu ? (
            <div className="menuMobile">
              <Link to="/writer/" onClick={this.toggleMenuMobile}>
                Home
              </Link>
              <Link to="/writer/books" onClick={this.toggleMenuMobile}>
                My Books
              </Link>
              <Link to="/writer/profit" onClick={this.toggleMenuMobile}>
                My Profit
              </Link>
              <Link to="/writer/newbook" onClick={this.toggleMenuMobile}>
                Send Book
              </Link>
              <Button onClick={this.logout}>
                <ExitToAppIcon />
              </Button>

              <Button onClick={this.toApp} style={{ bottom: "100px" }}>
                <LoopIcon />
              </Button>
            </div>
          ) : (
            ""
          )}
          <div className="menu">
            <Link to="/writer/">Home</Link>
            <Link to="/writer/books">My Books</Link>
            <Link to="/writer/profit">My Profit</Link>
            <Link to="/writer/newbook"> Send Book</Link>
            <Button onClick={this.logout}>
              <ExitToAppIcon />
            </Button>
            <Button onClick={this.toApp}>
              <LoopIcon />
            </Button>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route path="/writer/" exact>
              <h1>Inicio</h1>
            </Route>
            <Route path="/writer/books">
              <MovieRow title="Comédia" items={this.state.items} />
            </Route>
            <Route path="/writer/profit">
              <h1>ganhos</h1>
            </Route>
            <Route path="/writer/newbook">
              <Newbook />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
