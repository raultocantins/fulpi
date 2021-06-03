import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import StarIcon from "@material-ui/icons/Star";
import Paper from "@material-ui/core/Paper";
//import Components
import Logo from "./assets/panda.svg";
function App() {
  return (
    <Router>
      <div className="App">
        <Drawer variant="permanent" anchor="left">
          <div className="logo">
            <img src={Logo} alt="logo" className="logo" />
            <h1>FULPI</h1>
          </div>

          <List className="listMenu">
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            </Link>
            <Link to="/books">
              <ListItem button>
                <ListItemIcon>
                  <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText>Books</ListItemText>
              </ListItem>
            </Link>
            <Link to="/favoritos">
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>Favoritos</ListItemText>
              </ListItem>
            </Link>
          </List>
          <div className="logoutDiv">
            <Button>
              Logout
              <ExitToAppIcon />
            </Button>
          </div>
        </Drawer>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <h1>Dashboard</h1>
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
