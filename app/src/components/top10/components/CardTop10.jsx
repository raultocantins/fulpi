import React from "react";
import "./CardTop.css";
import { Link } from "react-router-dom";
const CardTop10 = (props) => {
  var data = props.data;
  return (
    <Link to={`/app/book/${data.id}`}>
      <div className="cardtop10">
        <img src={data.image} alt="card top 10" />
      </div>
    </Link>
  );
};

export default CardTop10;
