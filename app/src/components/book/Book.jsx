import { React} from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Book = function () {
//  let { id } = useParams();
 // const [start, setStar] = useState(2)

  return (
    <div className="book">
      <div className="capa">
        <img src="http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg" alt="capa" />
        <div className="describe">
          <h1>O guerreiro sagrado</h1>
          <Link to="/app/pdfviewer/:linktopdf">
            <button>Ler book</button></Link>
        </div>
      </div>
      <div className="content">
        <div className="preface">
          <h1>Prefácio</h1>
          <p>Lorde era um guerreiro sagrado do monte kai, ele encontrou um velho que o ensinou a lutar e se tornar o melhor lutador do mundo.</p>
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
          <p><strong>Nome:</strong> Alex raul santo</p>
          <p><strong>Lançamento:</strong> 10/04/2005</p>
          <p><strong>Distribuidora:</strong> NetLivros</p>
          <p><strong>Gênero:</strong> Ação/Ficcção</p>
        </div>
      </div>
    </div>
  );
}
export default Book;