import "./Sections.css";
import Perfil1 from "../assets/perfil1.webp";
import Perfil2 from "../assets/perfil2.jpg";
import Perfil3 from "../assets/perfil3.jpg";
import Perfil4 from "../assets/perfil4.webp";

const section5 = () => {
  return (
    <div className="section5">
      <h1>O que nossos usuários estão achando</h1>
      <div className="cards">

      <div className="card">
        <p>
          “Fiz muitas conexões que me levaram a hoje me redescobrir dentro da
          tecnologia e atuar com algumas stacks que além de estar em alta no
          mercado fazem o meu dia ficar mais feliz. Sou eternamente grato a
          Rocketseat assim como sou um eterno aluno do inicio ao fim!”
        </p>
        <div className="user">
          <img src={Perfil1} alt="user" />
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
          <img src={Perfil2} alt="user" />
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
          <img src={Perfil3} alt="user" />
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
          <img src={Perfil4} alt="user" />
          <p>Henrique Weiand</p>
          <p>Remote TechLead/Developer</p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default section5;
