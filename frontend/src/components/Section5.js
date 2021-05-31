import "./Sections.css";
import Mobile from "../assets/weather-forecast.svg";

const section5 = () => {
  return (
    <div className="section5">
      <div className="card">
        <p>
          “Fiz muitas conexões que me levaram a hoje me redescobrir dentro da
          tecnologia e atuar com algumas stacks que além de estar em alta no
          mercado fazem o meu dia ficar mais feliz. Sou eternamente grato a
          Rocketseat assim como sou um eterno aluno do inicio ao fim!”
        </p>
        <div className="user">
          <img src={Mobile} alt="user" />
          <p>Henrique Weiand</p>
          <p>Remote TechLead/Developer</p>
        </div>
      </div>
      <div className="card">
        <p>
          “Fiz muitas conexões que me levaram a hoje me redescobrir dentro da
          tecnologia e atuar com algumas stacks que além de estar em alta no
          mercado fazem o meu dia ficar mais feliz. Sou eternamente grato a
          Rocketseat assim como sou um eterno aluno do inicio ao fim!”
        </p>
        <div className="user">
          <img src={Mobile} alt="user" />
          <p>Henrique Weiand</p>
          <p>Remote TechLead/Developer</p>
        </div>
      </div>
    </div>
  );
};
export default section5;
