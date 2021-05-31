import "./Sections.css";
import Book1 from "../assets/book.svg";
import Book2 from "../assets/open-book.svg";
import Book3 from "../assets/book2.svg";
const section3 = () => {
  return (
    <div className="section3">
        <h1>Vários gêneros e simplicidade</h1>
     <div className="cards">
     <div className="card">
        <img src={Book1} alt="book" />
      </div>
      <div className="card">
        <img src={Book2} alt="book" />
      </div>
      <div className="card">
        <img src={Book3} alt="book" />
      </div>
     </div>
    </div>
  );
};
export default section3;
