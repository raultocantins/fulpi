import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
//import Components
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Book from "./pages/book/Book";
import Dashboard from "./pages/dashboard/Dashboard";
import Top10 from "./pages/top10/Top10";
import Favoritos from "./pages/favoritos/Favoritos";
import BookSeries from "./pages/bookSeries/BookSeries";
import Profile from "./pages/profile/Profile";
import Genre from "./pages/genre/Genre";
import AppsIcon from "@material-ui/icons/Apps";
import CloseIcon from "@material-ui/icons/Close";
import PdfViewer from "./pages/pdfviewer/PdfViewer";
import { Worker } from "@react-pdf-viewer/core";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { development } from "./config/url";
import IconButton from "@material-ui/core/IconButton";
import LoopIcon from "@material-ui/icons/Loop";
import ProfileIllustration from "./assets/n.png";
import { useAlert } from "react-alert";
import Loading from "./shared/loading/Loading";

import Axios from "./shared/axios/Axios";
function historys(historys) {
  return { type: "HISTORYS", historys };
}
function userSet(user) {
  return { type: "SIGNIN_USER", user };
}

function App() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);
  const [toggleMenu, ToggleMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  function toggleMenuMobile() {
    ToggleMenu(!toggleMenu);
  }
  function logout() {
    window.localStorage.removeItem("token");
    document.location.href = "/signin";
  }
  useEffect(() => {
    let userToken = JSON.parse(window.localStorage.getItem("token"));
    Axios.get(`${development}/historys`)
      .then((res) => {
        dispatch(historys(res.data));
        dispatch(userSet(userToken));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert.error("Error network!");
      });
  }, [dispatch, alert]);

  function toWriter() {
    window.location.href = "/writer";
  }

  return (
    <Router>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        {!loading ? (
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
                    Home
                  </Link>
                  <Link to="/app/books" onClick={toggleMenuMobile}>
                    book Series
                  </Link>
                  <Link to="/app/top10" onClick={toggleMenuMobile}>
                    Top10
                  </Link>
                  <Link to="/app/favoritos" onClick={toggleMenuMobile}>
                    My list
                  </Link>
                  <Link to="/app/profile" onClick={toggleMenuMobile}>
                    Profile
                  </Link>
                  {user.writer ? (
                    <Button onClick={toWriter} style={{ bottom: "100px" }}>
                      <LoopIcon />
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button onClick={logout}>
                    <ExitToAppIcon />
                  </Button>
                </div>
              ) : (
                ""
              )}
              <div className="menu">
                <Link to="/app/">Home</Link>
                <Link to="/app/books">book Series</Link>
                <Link to="/app/top10">Top10</Link>
                <Link to="/app/favoritos">My list</Link>
              </div>
              <div className="search">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <SearchIcon />
                </IconButton>
              </div>
              <div className="imgProfile">
                <Link to="/app/profile">
                  <img
                    src={user.image ? user.image : ProfileIllustration}
                    alt="profile"
                  />
                  <p>{user.name.slice(0, 12)}</p>
                </Link>
                {user.writer ? (
                  <Button onClick={toWriter}>
                    <LoopIcon />
                  </Button>
                ) : (
                  ""
                )}

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
                <Route path="/app/pdfviewer/:id/:historyId">
                  <PdfViewer />
                </Route>
                <Route path="/app/genre/:id">
                  <Genre />
                </Route>
              </Switch>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </Worker>
    </Router>
  );
}

export default App;
