import React from "react";
import "./Dashboard.css";
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
      <div className="cartaz">
      <div className="spotlight">
          <img src="https://cdn.falauniversidades.com.br/wp-content/uploads/2019/04/better-call-saul-cartaz1.jpg" alt="spotlight" />         
           
           <div className="btn">
            <div className="title">
            <h1>Better Call Saull</h1>
            <p>Por: Alex raul santo</p>
            </div>
           <button>Read book</button>         
           </div>
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
