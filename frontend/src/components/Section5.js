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
            “Eu particularmente adoro noticias e encontrar o fulpi foi a melhor
            coisa que me aconteceu, a facilidade em encotrar todas as minhas
            newsletter favoritas em um único lugar foi oque me levou a acessar a
            plataforma.”
          </p>
          <div className="user">
            <img src={Perfil1} alt="user" />
            <p>Henrique santos</p>
            <p>Remote TechLead/Developer</p>
          </div>
        </div>
        <div className="card">
          <p>
            “Achei perfeito para mim, eu não gosto muito de ler mais adoro
            noticias e encontrar o fulpi audio player foi sensacional.”
          </p>
          <div className="user">
            <img src={Perfil2} alt="user" />
            <p>André gomes</p>
            <p>Programador/UFMA</p>
          </div>
        </div>
        <div className="card">
          <p>
            "Caraca!!!, estou apaixonado nessa plataforma, está me ajudando
            muito para desenvolvimento do meu TCC."
          </p>
          <div className="user">
            <img src={Perfil3} alt="user" />
            <p>Eduarda menezes</p>
            <p>Estudante de pedagogia/UFTO</p>
          </div>
        </div>
        <div className="card">
          <p>
            "Estou testando a plataforma e por enquanto só tenho a agradecer aos
            desenvolvedores, por ser gratuita está realmente íncrivel."
          </p>
          <div className="user">
            <img src={Perfil4} alt="user" />
            <p>Adriana gomes</p>
            <p>Engenheira de minas/Vale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section5;
