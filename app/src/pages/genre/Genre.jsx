import React, { useState, useEffect } from "react";
import Axios from "../../shared/axios/Axios";
import { Link, useParams } from "react-router-dom";
import "./Genre.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";
import development from "../../config/url";
import ReactLoading from "react-loading";
const Genre = () => {
  var { genre } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    Axios.get(`${development}/books/?genre=${genre}&page=${page}`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("error");
      });
  }, [page, books, genre]);

  function addNewBooks() {
    setPage(page + 1);
    Axios.get(`${development}/books/?genre=${genre}&page=${page}`)
      .then((res) => {
        setBooks([...books, res.data]);
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  }
  return (
    <div className="genre">
      <h1>{genre}</h1>
      {loading ? (
        <ReactLoading type="bubbles" height={300} width={300} color="#e50914" />
      ) : (
        <div className="row">
          {books.map((e) => {
            return (
              <Link to={`/app/book/${e.id}`}>
                <div key={e.id} className="row--item">
                  <img src={e.img} alt="capa" />
                </div>
              </Link>
            );
          })}
          {books.length > 0 ? (
            <button onClick={addNewBooks} className="loadingBooks">
              {!loading ? (
                <ExpandMoreIcon style={{ fontSize: "30px" }} />
              ) : (
                <CircularProgress color="#fff" />
              )}
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};
export default Genre;
