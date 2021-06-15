import React from "react";
import "./Dashboard.css";
import MovieRow from "../movieRow/MovieRow";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default class Dashboard extends React.Component {
  render() {
    var items = [
      { status:true,
        id: 0,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      { status:true,
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      { status:true,
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      { status:true,
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      { status:true,
        id: 1,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      { status:true,
        id: 2,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      { status:true,
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      { status:true,
        id: 1,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      { status:true,
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      { status:true,
        id: 0,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      { status:true,
        id: 1,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      { status:true,
        id: 2,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      { status:true,
        id: 0,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      { status:true,
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      { status:true,
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
    ];
    return (
      <div className="dashboard">
        <div className="cartaz">
          <div className="spotlight">
            <LazyLoadImage
              alt="spotlight"
              src="https://cdn.falauniversidades.com.br/wp-content/uploads/2019/04/better-call-saul-cartaz1.jpg" // use normal <img> attributes as props
            />

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
