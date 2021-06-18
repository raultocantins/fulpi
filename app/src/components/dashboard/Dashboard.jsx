import { React } from "react";
import "./Dashboard.css";
import MovieRow from "../movieRow/MovieRow";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const historys = useSelector((state) => state.historys.historys);
  return (
    <div className="dashboard">
      <div className="cartaz">
        <div className="spotlight">

          <LazyLoadImage
            alt="spotlight"
            effect="blur"
            height="100%"
            width="100%"
            src={historys.spotlight.map(e => e.image)} // use normal <img> attributes as props
          />


          <div className="btn">
            <div className="title">
              <h1>Better Call Saull</h1>
              <p>Por: Alex raul santo</p>
            </div>
            <Link to={`/app/book/${historys.spotlight.map(e => e.id)}`}>  <button >Read book</button></Link>

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
