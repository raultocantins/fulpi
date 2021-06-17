import React from "react";
import "./Dashboard.css";
import MovieRow from "../movieRow/MovieRow";
import Axios from "axios";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { development } from '../../config/url'
export default class Dashboard extends React.Component {
  state = {
    historys: [],
  };

  componentDidMount() {
    Axios.get(`${development}/historys`)
      .then((res) => {
        this.setState({ historys: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="dashboard">
        <div className="cartaz">
          <div className="spotlight">
            <LazyLoadImage
              alt="spotlight"
              effect="blur"
              height="100%"
              width="100%"
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
          {this.state.historys.action?.length > 0 ? (
            <MovieRow title="Action" items={this.state.historys.action} />
          ) : (
            ""
          )}
          {this.state.historys.romance?.length > 0 ? (
            <MovieRow title="romance" items={this.state.historys.romance} />
          ) : (
            ""
          )}
          {this.state.historys.fiction?.length > 0 ? (
            <MovieRow title="fiction" items={this.state.historys.fiction} />
          ) : (
            ""
          )}
          {this.state.historys.biography?.length > 0 ? (
            <MovieRow title="biography" items={this.state.historys.biography} />
          ) : (
            ""
          )}
          {this.state.historys.poetry?.length > 0 ? (
            <MovieRow title="poetry" items={this.state.historys.poetry} />
          ) : (
            ""
          )}
          {this.state.historys.anthem?.length > 0 ? (
            <MovieRow title="anthem" items={this.state.historys.anthem} />
          ) : (
            ""
          )}
          {this.state.historys.sonnet?.length > 0 ? (
            <MovieRow title="sonnet" items={this.state.historys.sonnet} />
          ) : (
            ""
          )}
          {this.state.historys.satire?.length > 0 ? (
            <MovieRow title="satire" items={this.state.historys.satire} />
          ) : (
            ""
          )}
          {this.state.historys.technician?.length > 0 ? (
            <MovieRow
              title="technician"
              items={this.state.historys.technician}
            />
          ) : (
            ""
          )}
          {this.state.historys.fable?.length > 0 ? (
            <MovieRow title="fable" items={this.state.historys.fable} />
          ) : (
            ""
          )}
          {this.state.historys.literature?.length > 0 ? (
            <MovieRow
              title="literature"
              items={this.state.historys.literature}
            />
          ) : (
            ""
          )}
          {this.state.historys.drama?.length > 0 ? (
            <MovieRow title="drama" items={this.state.historys.drama} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
