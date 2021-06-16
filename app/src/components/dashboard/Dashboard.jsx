import React from "react";
import "./Dashboard.css";
import MovieRow from "../movieRow/MovieRow";
import Axios from 'axios'

import { LazyLoadImage } from "react-lazy-load-image-component";
export default class Dashboard extends React.Component {

  state = {
    historys: []
  }
  componentDidMount() {
    Axios.get('http://localhost:4000/historys')
      .then(res => {      
        this.setState({ historys: res.data })        
      })
      .catch(err => {
        console.log(err)
      })
  } 
  

  render() {
    var items = [
      {
        status: true,
        id: 0,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: true,
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: true,
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: true,
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        status: true,
        id: 1,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        status: true,
        id: 2,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        status: true,
        id: 0,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        status: true,
        id: 1,
        image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
      },
      {
        status: true,
        id: 2,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: true,
        id: 0,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        status: true,
        id: 1,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        status: true,
        id: 2,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        status: true,
        id: 0,
        image:
          "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
      },
      {
        status: true,
        id: 1,
        image:
          "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
      },
      {
        status: true,
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

          {this.state.historys.action? <MovieRow title="Action" items={this.state.historys.action} /> : ""}
          {this.state.historys.romance ? <MovieRow title="romance" items={this.state.historys.romance} /> : ""}
          {this.state.historys.fiction ? <MovieRow title="fiction" items={this.state.historys.fiction} /> : ""}
          {this.state.historys.biography ? <MovieRow title="biography" items={this.state.historys.biography} /> : ""}
          {this.state.historys.poetry ? <MovieRow title="poetry" items={this.state.historys.poetry} /> : ""}
          {this.state.historys.anthem ? <MovieRow title="anthem" items={this.state.historys.anthem} /> : ""}
          {this.state.historys.sonnet ? <MovieRow title="sonnet" items={this.state.historys.sonnet} /> : ""}
          {this.state.historys.satire ? <MovieRow title="satire" items={this.state.historys.satire} /> : ""}
          {this.state.historys.technician ? <MovieRow title="technician" items={this.state.historys.technician} /> : ""}
          {this.state.historys.fable ? <MovieRow title="fable" items={this.state.historys.fable} /> : ""}
          {this.state.historys.literature ? <MovieRow title="literature" items={this.state.historys.literature} /> : ""}
          {this.state.historys.drama ? <MovieRow title="drama" items={this.state.historys.drama} /> : ""}
        </div>

      </div>
    );
  }
}
