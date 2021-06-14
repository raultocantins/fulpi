import React from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../assets/perfil2.jpg";

import AppsIcon from "@material-ui/icons/Apps";
import CloseIcon from "@material-ui/icons/Close";

import "./HistoryPage.css";

//Components
import Newbook from "./components/Newbook";

export default class HistoryPage extends React.Component {
  state = {
    toggleMenu: false,
  };
  constructor(props) {
    super(props);
  }
  toggleMenuMobile() {
    //   ToggleMenu(!toggleMenu);
  }
  logout() {
    window.localStorage.removeItem("token");
    document.location.href = "/signin";
  }
  render() {
    return (
      <div className="historyPage">
        <div className="appbar">
          <h1>FulpiBooks</h1>
          {this.state.toggleMenu ? (
            <CloseIcon className="iconMobile" onClick={this.toggleMenuMobile} />
          ) : (
            <AppsIcon className="iconMobile" onClick={this.toggleMenuMobile} />
          )}

          {this.state.toggleMenu ? (
            <div className="menuMobile">
              <Link to="/app/" onClick={this.toggleMenuMobile}>
                Ínicio
              </Link>
              <Link to="/app/books" onClick={this.toggleMenuMobile}>
                Books séries
              </Link>
              <Link to="/app/top10" onClick={this.toggleMenuMobile}>
                Top10
              </Link>
              <Link to="/app/favoritos" onClick={this.toggleMenuMobile}>
                Favoritos
              </Link>
              <Link to="/app/profile" onClick={this.toggleMenuMobile}>
                Perfil
              </Link>
            </div>
          ) : (
            ""
          )}
          <div className="menu">
            <Link to="/writer/">Ínicio</Link>
            <Link to="/writer/books">Meus livros</Link>
            <Link to="/writer/profit">Meus ganhos</Link>
            <Link to="/writer/newbook">Adicionar livro</Link>
          </div>
          <Button onClick={this.logout}>
            <ExitToAppIcon />
          </Button>
        </div>
        <div className="container">
          <Switch>
            <Route path="/writer/" exact>
              <h1>Inicio</h1>
            </Route>
            <Route path="/writer/books">
              <h1>books</h1>
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
