import React,{useEffect} from "react";
import "./Favoritos.css";
import MovieRow from "../movieRow/MovieRow";
import { useSelector } from "react-redux";
const Favoritos = () => {


const historys = useSelector((state) => state.historys.historys);
useEffect(()=>{
  const favoriteHistorys=historys.action.map(e=>e.id===historys.favorites[1]?e:null)
  console.log(favoriteHistorys)
})
  return (
    <div className="favoritos">
      <h1>Favoritos</h1>
      <div className="rowsGenre">
      {historys.action?.length > 0 ? (
          <MovieRow title="Action" items={historys.action} />
        ) : (
          ""
        )}
        {historys.romance?.length > 0 ? (
          <MovieRow title="romance" items={historys.romance} />
        ) : (
          ""
        )}
        {historys.fiction?.length > 0 ? (
          <MovieRow title="fiction" items={historys.fiction} />
        ) : (
          ""
        )}
        {historys.biography?.length > 0 ? (
          <MovieRow title="biography" items={historys.biography} />
        ) : (
          ""
        )}
        {historys.poetry?.length > 0 ? (
          <MovieRow title="poetry" items={historys.poetry} />
        ) : (
          ""
        )}
        {historys.anthem?.length > 0 ? (
          <MovieRow title="anthem" items={historys.anthem} />
        ) : (
          ""
        )}
        {historys.sonnet?.length > 0 ? (
          <MovieRow title="sonnet" items={historys.sonnet} />
        ) : (
          ""
        )}
        {historys.satire?.length > 0 ? (
          <MovieRow title="satire" items={historys.satire} />
        ) : (
          ""
        )}
        {historys.technician?.length > 0 ? (
          <MovieRow title="technician" items={historys.technician} />
        ) : (
          ""
        )}
        {historys.fable?.length > 0 ? (
          <MovieRow title="fable" items={historys.fable} />
        ) : (
          ""
        )}
        {historys.literature?.length > 0 ? (
          <MovieRow title="literature" items={historys.literature} />
        ) : (
          ""
        )}
        {historys.drama?.length > 0 ? (
          <MovieRow title="drama" items={historys.drama} />
        ) : (
          ""
        )}
     
      </div>
    </div>
  );
};
export default Favoritos;
