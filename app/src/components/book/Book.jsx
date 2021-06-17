import { React, useEffect, useState } from "react";
import Axios from "axios";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import "./Book.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "react-lazy-load-image-component/src/effects/blur.css";
import { development } from "../../config/url";
import { useSelector } from "react-redux";
const Book = function () {
  var { id } = useParams();
  const historys = useSelector((state) => state.historys.historys);

  const [history, setHistory] = useState([]);
  const [url, setUrl] = useState("");
  const genres = [
    "action",
    "anthem",
    "biography",
    "drama",
    "fable",
    "fiction",
    "horror",
    "literature",
    "poetry",
    "romance",
    "satire",
    "sonnet",
    "technician",
  ];
  function getHistoryById(id) {
    var arrays = [];
    for (var i = 0; i <= genres.length; i++) {
      arrays.push(historys[genres[i]]);
    }
    arrays.forEach((e) => {
     if(e){
      e.map((e) => {
        if (e.id===parseInt(id)) {   
          setHistory(e)
        }
      });
     }
    });
  }
  useEffect(() => {
    getHistoryById(id);      
  }, []);
  return (
    <div className="book">
      <div className="capa">
        <LazyLoadImage
          effect="blur"
          height="100%"
          width="100%"
          src={history.image}
          alt="capa"
        />
        <div className="describe">
          <h1>{history.name}</h1>
          <Link to={`/app/pdfviewer/${url}`}>
            <button>Ler book</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="preface">
          <h1>Prefácio</h1>
          <p>{history.prefacio}</p>
        </div>
        <div className="score">
          <h1>Score</h1>
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </div>
        <div className="owner">
          <h1>Escritores/Produtores</h1>
          <p>
            <strong>Nome: </strong> {history.escritor}
          </p>
          <p>
            <strong>Lançamento: </strong> {history.lancamento}
          </p>
          <p>
            <strong>Distribuidora: </strong> {history.distribuidora}
          </p>
          <p>
            <strong>Gênero: </strong>
            {history.genero}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Book;
