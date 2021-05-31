import Logo from "./assets/Emoji.png";
import "./App.css";
//sections
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="appbar">
          <div className="logo">
            {" "}
            <img src={Logo} alt="logo" />
            <h3>FULPI</h3>
          </div>
          <div className="menu">
            <a href="/">Newsletter</a>
            <a href="/">About</a>
            <a href="/">Suport</a>
            <a href="/">Contact</a>
            <a href="/">Login</a>
          </div>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <div className="footer"></div>
    </div>
  );
}

export default App;
