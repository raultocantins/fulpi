import React from "react";
import "./Dashboard.css";
import Destaque from "../../assets/perfil2.jpg";
import MovieRow from "../movieRow/MovieRow";
export default class Dashboard extends React.Component {
  render() {
    var items = [
      {
        id: 0,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        id: 1,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        id: 2,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        id: 1,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        id: 0,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        id: 1,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        id: 2,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        id: 0,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
    ];
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
        <div className="rowsGenre">
          <MovieRow title="Comédia" items={items} />
          <MovieRow title="Romance" items={items} />
          <MovieRow title="Ficção" items={items} />
          <MovieRow title="Ação" items={items} />
        </div>
      </div>
    );
  }
}
