import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import ReleaseCard from "./components/ReleaseCard";
import Destaque from "../../assets/perfil2.jpg";
export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="spotlight">
          <img src={Destaque} alt="spotlight" />
          <div className="describe">
            <h1>Maria e seus violinos</h1>
            <p>
              Agora é a época em que estão amadurecendo as nozes; vamos os dois
              à montanha e, pelo menos uma vez na vida, fartemo-nos, antes que o
              esquilo as carregue todas. - Sim, - respondeu Franguinha, - vamos;
              vamos regalar-nos fartamente. E lá se foram os dois para a
              montanha. Como era um dia magnífico, deixaram-se ficar até tarde.
              Ora, eu não sei se realmente estavam empanturrados, ou se apenas
              fingiam estar; só sei que não queriam voltar a pé para casa e
              Franguinho teve que construir um carrinho com cascas de nozes.
              Quando ficou pronto, Franguinha acomodou-se nele e disse: - Agora,
              Franguinho, podes puxar.
            </p>
            <button>Read book</button>
          </div>
        </div>

        <h3>Comédia</h3>
        <div className="genre">
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
        </div>

        <h3>Romance</h3>
        <div className="genre">
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
        </div>

        <h3>Ação</h3>
        <div className="genre">
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
        </div>
        <h3>Ficção</h3>
        <div className="genre">
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>

          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
          <Link to="/book/1">
            <ReleaseCard />
          </Link>
        </div>
      </div>
    );
  }
}
