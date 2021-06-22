import React, { useEffect, useState } from "react";
import "./Favoritos.css";
import MovieRow from "../movieRow/MovieRow";
import { useSelector } from "react-redux";
const Favoritos = () => {
  const [historyFavorite, setHistorysFavorite] = useState();
  const historys = useSelector((state) => state.historys.historys);
  const favoriteIds = useSelector((state) => state.historys.historys.favorites);
  useEffect(() => {
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
    let arrays = [];
    let newArray = [];
    var favoriteHistorys = [];
    //  var likedHistorys = [];
    //  var completHistorys = [];
    for (var i = 0; i <= genres.length; i++) {
      arrays.push(historys[genres[i]]);
    }
    arrays.map((e) => (e?.length > 0 ? newArray.push(e) : e));
    newArray.map((e) => {
      return e.map(
        (e) => (favoriteIds?.includes(e.id) ? favoriteHistorys.push(e) : "")
        //  likedHistorys?.includes(e.id) ? favoriteHistorys.push(e) : "",
        //completHistorys?.includes(e.id) ? favoriteHistorys.push(e) : ""
      );
    });
    setHistorysFavorite(favoriteHistorys);
  }, [historys, favoriteIds]);

  return (
    <div className="favoritos">
      <h1>My list</h1>
      <div className="rowsGenre">
        <MovieRow
          title="Favorites"
          items={historyFavorite ? historyFavorite : []}
        />
        <MovieRow
          title="Likes"
          items={historyFavorite ? historyFavorite : []}
        />
        <MovieRow
          title="Read books"
          items={historyFavorite ? historyFavorite : []}
        />
      </div>
    </div>
  );
};
export default Favoritos;
