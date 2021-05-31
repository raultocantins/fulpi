import "./Sections.css";
import PandaWork from "../assets/pandawork.svg";
const section1 = () => {
  return (
    <div className="section2">
      <div className="describe">
        <h1>O que fulpi faz?</h1>
        <p>
          Fulpi busca todos as newsletter disponíveis na internet e agrupa tudo
          isso em uma plataforma incrível.
        </p>
      </div>
      <img src={PandaWork} alt="panda work" />
    </div>
  );
};
export default section1;
