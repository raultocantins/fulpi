import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Logo from "./assets/perfil2.jpg";

import Input from "@material-ui/core/Input";

import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
//import Components
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Book from "./components/book/Book";
import Dashboard from './components/dashboard/Dashboard'

function App() {


  return (
    <Router>
      <div className="App">
        <div className="appbar">
          <h1>FulpiBooks</h1>
          <div className="menu">
            <Link to="/">Ínicio</Link>
            <Link to="/books">Books séries</Link>
            <Link to="/top10">Top10</Link>
            <Link to="/favoritos">Favoritos</Link>
          </div>
          <div className="search">
            <Input
              id="input-with-icon-adornment"
              className="searchInput"
              color="secondary"
              endAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
          <div className="profile">
            <Link to="/profile">
              <img src={Logo} alt="profile" />
              <h4>Alex raul</h4>
            </Link>
            <Button>
              <ExitToAppIcon />
            </Button>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/books">
              <h1>Books</h1>
              <Paper id="teste">
                <p>teste</p>
              </Paper>
            </Route>
            <Route path="/favoritos">
              <h1>Favoritos</h1>
            </Route>
            <Route path="/top10">
              <h1>Top10</h1>
            </Route>
            <Route path="/profile">
              <h1>Profile</h1>
            </Route>
            <Route path="/book/:id">
              <Book />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
