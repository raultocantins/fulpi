import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";
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
import ReactLoading from "react-loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { development } from "./config/url";
import Semfoto from "./assets/semfoto.jpg";
import Writer from "./assets/writer.jpg";
import IconButton from '@material-ui/core/IconButton';

function historys(historys) {
  return { type: "HISTORYS", historys };
}
function userSet(user) {
  return { type: "SIGNIN_USER", user };
}

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);
  const [toggleMenu, ToggleMenu] = useState(false);
  const [app, setApp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(false);
  function toggleMenuMobile() {
    ToggleMenu(!toggleMenu);
  }
  function logout() {
    window.localStorage.removeItem("token");
    document.location.href = "/signin";
  }
  useEffect(() => {
    setLoading(true);
    let userToken = JSON.parse(window.localStorage.getItem("token"));
    Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userToken.token}`;
    Axios.get(`${development}/historys`)
      .then((res) => {
        dispatch(historys(res.data));
        dispatch(userSet(userToken));
        setLoading(false);
        if (!userToken.writer) {
          setApp(true);
        } else {
          setSelect(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("error ao carregar historias");
        setLoading(false);
      });
  }, [dispatch]);

  function selectApp() {
    setSelect(false);
    setApp(true);
  }
  function toWriter() {
    window.location.href = "/writer";
  }

  return (
    <Router>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        {loading ? (
          <ReactLoading
            type="spinningBubbles"
            color="#e50914"
            className="loading"
            height={400}
            width={400}
          />
        ) : (
          ""
        )}
        {user.writer && !loading && select ? (
          <div className="selectUser">
            <button onClick={selectApp}>
              <div className="hoverBlack"></div>
              <LazyLoadImage
                style={{ borderRadius: "10px" }}
                effect="blur"
                height="100%"
                width="100%"
                src={user.image ? user.image : Semfoto}
                alt="user"
              />
            </button>
            <button onClick={toWriter}>
              <div className="hoverBlack"></div>
              <LazyLoadImage
                style={{ borderRadius: "10px" }}
                effect="blur"
                height="100%"
                width="100%"
                src={Writer}
                alt="user"
              />
            </button>
          </div>
        ) : (
          ""
        )}
        {!loading && app && !select ? (
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
                  <Button onClick={logout}>
                    <ExitToAppIcon />
                  </Button>
                </div>
              ) : (
                ""
              )}
              <div className="menu">
                <Link to="/app/">Ínicio</Link>
                {/* <Link to="/app/books">Books séries</Link>
                  <Link to="/app/top10">Top10</Link>
                <Link to="/app/favoritos">Favoritos</Link>*/}
              </div>
              <div className="search">
              <IconButton color="primary" aria-label="upload picture" component="span">
          <SearchIcon />
        </IconButton>
              </div>
              <div className="imgProfile">
                <Link to="/app/profile">
                  <img src={user.image} alt="profile" />
            <p>{user.name.slice(0,12)}</p>
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
