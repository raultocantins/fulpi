import React, { useState } from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 250;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.length * 250,
          }}
        >
          {items.length > 0 &&
            items.map((item, key) => (
              <Link key={key} to={`/app/book/${item.id}`}>
                <div className="movieRow--item">
                  <div className="card">
                    <LazyLoadImage
                      height="100%"
                      width="100%"
                      alt="book"
                      src={item.image} // use normal <img> attributes as props
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieRow;
