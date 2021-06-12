import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./assets/perfil2.jpg";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
//import Components
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Book from "./components/book/Book";
import Dashboard from "./components/dashboard/Dashboard";
import Top10 from "./components/top10/Top10";
import Favoritos from "./components/favoritos/Favoritos";
import BookSeries from "./components/bookSeries/BookSeries";
import Profile from "./components/profile/Profile";
import AppsIcon from "@material-ui/icons/Apps";
import CloseIcon from "@material-ui/icons/Close";
import PdfViewer from "./components/pdfviewer/PdfViewer";
import { Worker } from "@react-pdf-viewer/core";
function App() {
  const [toggleMenu, ToggleMenu] = useState(false);
  const [app, setApp] = useState(false);
  function toggleMenuMobile() {
    ToggleMenu(!toggleMenu);
  }
  function logout() {
    window.localStorage.removeItem("token");
    document.location.href = "/signin";
  }
  useEffect(() => {
    var user = JSON.parse(window.localStorage.getItem("token"));
    if (!user?.writer) {
      setApp(true);
    }
  }, []);

  function selectApp() {
    setApp(true);
  }

  function toWriter() {
    window.location.href = "/writer";
  }

  return (
    <Router>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        {app === false ? (
          <div className="selectUser">
            <button onClick={selectApp}>
              <div className="hoverBlack"></div>
              <img
                src="https://image.freepik.com/fotos-gratis/perfil-de-um-homem-bonito_102671-6967.jpg"
                alt="user"
              />
            </button>
            <button onClick={toWriter}>
              <div className="hoverBlack"></div>
              <img
                src="https://wallpaperforu.com/wp-content/uploads/2020/07/vintage-wallpaper-20071314082149.jpg"
                alt="user"
              />
            </button>
          </div>
        ) : (
          ""
        )}
        {app ? (
          <div className="App">
            <div className="appbar">
              <h1>FulpiBooks</h1>
              {toggleMenu ? (
                <CloseIcon className="iconMobile" onClick={toggleMenuMobile} />
              ) : (
                <AppsIcon className="iconMobile" onClick={toggleMenuMobile} />
              )}

              {toggleMenu ? (
                <div className="menuMobile">
                  <Link to="/app/" onClick={toggleMenuMobile}>
                    Ínicio
                  </Link>
                  <Link to="/app/books" onClick={toggleMenuMobile}>
                    Books séries
                  </Link>
                  <Link to="/app/top10" onClick={toggleMenuMobile}>
                    Top10
                  </Link>
                  <Link to="/app/favoritos" onClick={toggleMenuMobile}>
                    Favoritos
                  </Link>
                  <Link to="/app/profile" onClick={toggleMenuMobile}>
                    Perfil
                  </Link>
                </div>
              ) : (
                ""
              )}
              <div className="menu">
                <Link to="/app/">Ínicio</Link>
                <Link to="/app/books">Books séries</Link>
                <Link to="/app/top10">Top10</Link>
                <Link to="/app/favoritos">Favoritos</Link>
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
              <div className="imgProfile">
                <Link to="/app/profile">
                  <img src={Logo} alt="profile" />
                </Link>

                <Button onClick={logout}>
                  <ExitToAppIcon />
                </Button>
              </div>
            </div>
            <div className="container">
              <Switch>
                <Route path="/app/" exact>
                  <Dashboard />
                </Route>
                <Route path="/app/books">
                  <BookSeries />
                </Route>
                <Route path="/app/favoritos">
                  <Favoritos />
                </Route>
                <Route path="/app/top10">
                  <Top10 />
                </Route>
                <Route path="/app/profile">
                  <Profile />
                </Route>
                <Route path="/app/book/:id">
                  <Book />
                </Route>
                <Route path="/app/pdfviewer/:id">
                  <PdfViewer />
                </Route>
              </Switch>
            </div>
          </div>
        ) : (
          ""
        )}
      </Worker>
    </Router>
  );
}

export default App;
