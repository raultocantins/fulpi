import { React, useState, useEffect } from "react";
import "./Dashboard.css";
import MovieRow from "../movieRow/MovieRow";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Dashboard = () => {
  const [spotlight, setSpotlight] = useState(0)

  useEffect(() => {


  })
  function carouselNext() {

    if (spotlight < historys.spotlight.length - 1) {
      setSpotlight(spotlight + 1)
    } else {
      setSpotlight(0)
    }


  }
  function carouselBack() {

    if (spotlight > 0) {
      setSpotlight(spotlight - 1)
    }else{
      setSpotlight(historys.spotlight.length- 1)
    }


  }

  const historys = useSelector((state) => state.historys.historys);
  return (
    <div className="dashboard">
      <div className="cartaz">
        <div className="spotlight">
          <button onClick={carouselNext} className="btnNextSpotlight"><ArrowForwardIosIcon/></button>
          <button onClick={carouselBack} className="btnBackSpotlight"><ArrowBackIosIcon/></button>
          <LazyLoadImage
            alt="spotlight"
            effect="blur"
            height="100%"
            width="100%"
            src={historys.spotlight[spotlight].image} // use normal <img> attributes as props
          />


          <div className="btn">

            <div className="title">

              <h1>{historys.spotlight[spotlight].name}</h1>
              <p>Por: {historys.spotlight[spotlight].escritor}</p>
            </div>
            <Link to={`/app/book/${historys.spotlight[spotlight].id}`}>  <button >Read book</button></Link>
          </div>
        </div>
      </div>
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

export default Dashboard;
