import "./Sections.css";
import Audio from "../assets/audio-waves.svg";
const section4 = () => {
  return (
    <div className="section4">
      <img src={Audio} alt="audio svg" />
      <div className="describe">
        <h1>Fulpi Audio Player </h1>
        <p>Ouça as newsletter com o fulpi-player e torne a sua experiência ainda mais incrível.</p>
        <button>Registrar</button>
      </div>
    </div>
  );
};
export default section4;
