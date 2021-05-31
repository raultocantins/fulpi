import "./Sections.css";
import pandaBanner from "../assets/panda.svg";
const section1=()=>{
      return (
    <div className="section1">
      <img src={pandaBanner} alt="panda banner" />
      <div className="describe">
        <h1>Newsletter em um único lugar</h1>
        <p>
          Sem taxas para acessar as melhores newsletter do mundo a partir de um
          único lugar.
        </p>
        <button>
          Registrar-se
        </button>
      </div>
    </div>
  );
};

export default section1