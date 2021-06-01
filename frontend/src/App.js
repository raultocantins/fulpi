import { Link, Element } from "react-scroll";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import "./App.css";
import Logo from "./assets/Emoji.png";
//sections
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
//icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function App() {
  var box = document.getElementsByClassName("box");
  function openMenu() {
    box[0].setAttribute("style", "display:flex");
  }
  function closeMenu() {
    box[0].setAttribute("style", "display:none");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="appbar">
          <div className="logo">
            {" "}
            <img src={Logo} alt="logo" />
            <h3>FULPI</h3>
          </div>
          <div className="menuMobile">
            <DehazeIcon onClick={openMenu} />
            <div className="box">
              <CloseIcon onClick={closeMenu} />
              <Link
                activeClass="active"
                to="newsletter"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Newsletter
              </Link>
              <Link
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Sobre
              </Link>
              <Link
                activeClass="active"
                to="fulpiaudio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Fulpi Áudio
              </Link>
              <Link
                activeClass="active"
                to="desempenho"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Desempenho
              </Link>

              <a href="/">Login</a>
            </div>
          </div>
          <div className="menu">
            <Link
              activeClass="active"
              to="newsletter"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Newsletter
            </Link>
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              activeClass="active"
              to="fulpiaudio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Fulpi Áudio
            </Link>
            <Link
              activeClass="active"
              to="desempenho"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Desempenho
            </Link>

            <a href="/">Login</a>
          </div>
        </div>
      </div>
      <Element name="newsletter">
        <Section1 />
      </Element>

      <Section2 />
      <Section3 />

      <Element name="fulpiaudio">
        <Section4 />
      </Element>

      <Section5 />

      <Element name="desempenho">
        <Section6 />
      </Element>
      <Element name="sobre">
        <Section7 />
      </Element>

      <div className="footer">
        <div className="imageFooter">
          <img src={Logo} alt="logo" />
          <h1>FULPI</h1>
        </div>
        <div className="describe">
          <p>
            {" "}
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <strong>© Copyright Fulpi 2021 </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
