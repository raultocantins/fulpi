import { React } from "react";
import { useParams } from "react-router-dom";
import "./Book.css";

 const Book=function () {
  let { id } = useParams();

  return (
    <div>
      <button>{id}</button>
    </div>
  );
}
export default Book;