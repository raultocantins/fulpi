import React from "react";
import {  Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreateIcon from "@material-ui/icons/Create";
import MovieRow from "../movieRow/MovieRow";
import AppsIcon from "@material-ui/icons/Apps";
import CloseIcon from "@material-ui/icons/Close";

import "./HistoryPage.css";

//Components
import Newbook from "./components/Newbook";

export default class HistoryPage extends React.Component {
  state = {
    toggleMenu: false,
    items: [
      {
        status: true,
        name: "Breaking bad",
        id: 0,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: false,
        name: "Morgan prime",
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        name: "Breaking bad",
        status: false,
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: true,
        name: "Breaking bad",
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
    ],
  };
 
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
