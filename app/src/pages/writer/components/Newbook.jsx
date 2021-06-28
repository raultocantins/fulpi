import { React, useState } from "react";
import Axios from "../../../shared/axios/Axios";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ReactLoading from "react-loading";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DatePicker from "react-date-picker";
import EventIcon from "@material-ui/icons/Event";
import ClearIcon from "@material-ui/icons/Clear";
import { development } from "../../../config/url";
import { useAlert } from "react-alert";
import "./Newbook.css";
const Newbook = () => {
  const alert = useAlert();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userimg, setUserImage] = useState("");
  const [link, setLink] = useState("");
  const [writtenin, setWrittenin] = useState();
  const [describe, setDescribe] = useState("");
  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");
  var userToken = JSON.parse(window.localStorage.getItem("token"));
  function nextStep() {
    if (step < 5) {
      switch (step) {
        case 0:
          if (userimg) {
            setStep(step + 1);
          } else {
            alert.show("Envie uma imagem para continuar");
          }
          break;
        case 1:
          if (link) {
            setStep(step + 1);
          } else {
            alert.show("Envie o seu pdf para continuar");
          }
          break;
        case 2:
          if (describe && genre) {
            setStep(step + 1);
          } else {
            alert.show("Preencha os campos para continuar");
          }
          break;
        case 3:
          if (title) {
            setStep(step + 1);
          } else {
            alert.show("Preencha o títula para finalizar");
          }
          break;
        default:
          submitHistory();
      }
    }
  }
  function backStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function onChangeImage(file) {
    setLoading(true);
    var data = new FormData();
    data.append("file", file.target.files[0]);
    Axios.post(`${development}/history/uploads`, data)
      .then((res) => {
        setUserImage(res.data.url);
        setLoading(false);
        alert.success("Upload da imagem completo!");
      })
      .catch((err) => {
        console.log(err);
        alert.error("Error ao enviar Imagem");
        setLoading(false);
      });
  }
  function onChangePdf(file) {
    setLoading(true);
    setLink("");
    var data = new FormData();
    data.append("file", file.target.files[0]);
    Axios.post(`${development}/history/uploads`, data, {
      onUploadProgress: (progressEvent) => {
        setProgress(
          `${Math.round((progressEvent.loaded / progressEvent.total) * 100)}`
        );
      },
    })
      .then((res) => {
        setLink(res.data.url);
        setLoading(false);
        alert.success("Upload da imagem completo!");
        setProgress("");
      })
      .catch((err) => {
        setProgress("");
        console.log(err);
        alert.error("Error ao enviar o arquivo pdf");
        setLoading(false);
      });
  }
  function submitHistory() {
    setLoading(true); 
    var history = {
      name: title,
      image: userimg,
      describe: describe,
      writtenin: writtenin,
      genre: genre,
      link: link,
      publisher: "FulpiBooks",
      writer:userToken.name
    };   
    Axios.post(`${development}/history`, { history })
      .then((res) => {
        setLoading(false);
        setStep(step + 1);
        alert.success("Envio completo!");
      })
      .catch((err) => {
        console.log(err);
        alert.error("error");
        setLoading(false);
      });
  }
  var genres = [
    "action",
    "romance",
    "fiction",
    "biography",
    "horror",
    "poetry",
    "anthem",
    "sonnet",
    "satire",
    "technician",
    "fable",
    "literature",
    "drama",
  ];

  return (
    <div className="newbook">
      <div className="box">
        {loading ? <ReactLoading className="loading" type="bubbles" /> : ""}
        {step === 0 ? (
          <div className="step0">
            <div className="describe">
              <p>
                <strong>Selecione uma imagem para o livro, </strong>
                as primeiras impressões são fundamentais para o alcance de
                leitores.
              </p>{" "}
            </div>
            <input
              type="file"
              onChange={onChangeImage}
              className="input"
              id="icon-button-file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <ReactLoading color="#e50914" type="spinningBubbles" />
                ) : (
                  <PhotoCamera />
                )}
              </IconButton>
            </label>
            <img
              src={userimg}
              alt="profile"
              style={userimg ? {} : { display: "none" }}
            />
          </div>
        ) : (
          ""
        )}
        {step === 1 ? (
          <div className="step1">
            {link ? (
              <div className="describe">
                <p>
                  <strong>Envio concluido com sucesso, </strong>
                  siga as próximas etapas para concluir o envio da sua obra.
                </p>{" "}
              </div>
            ) : (
              <div className="describe">
                <p>
                  <strong>
                    {progress === "" ? (
                      "Selecione o arquivo pdf"
                    ) : (
                      <strong>{progress}% concluído</strong>
                    )}
                    ,{" "}
                  </strong>
                  aqui é o passo mais importante, é a sua obra que ficará
                  disponível para todos os leitores.
                </p>{" "}
              </div>
            )}

            <input
              type="file"
              onChange={onChangePdf}
              className="input"
              id="icon-button-file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <ReactLoading color="#e50914" type="spinningBubbles" />
                ) : (
                  <PictureAsPdfIcon />
                )}
              </IconButton>
            </label>
          </div>
        ) : (
          ""
        )}
        {step === 2 ? (
          <div className="step2">
            <div className="describe">
              <p>
                <strong>Defina o resumo do seu livro, </strong>
                demonstre em poucas palavras o quanto incrível é o seu livro.
              </p>{" "}
            </div>
            <div className="form-group">
              <div className="prefacio">
                <label htmlFor="formGroupExampleInput">Prefácio</label>
                <textarea
                  onChange={(text) => {
                    setDescribe(text.target.value);
                  }}
                  id="formGroupExampleInput"
                  value={describe}
                />
              </div>
              <div className="lancamento">
                <label htmlFor="formGroupExampleInput">Lançamento</label>
                <DatePicker
                  calendarIcon={<EventIcon />}
                  clearIcon={<ClearIcon />}
                  onChange={(newDate) => {
                    setWrittenin(newDate);
                  }}
                  value={writtenin}
                  id="formGroupExampleInput"
                />
              </div>
              <div className="genero">
                <label htmlFor="formGroupExampleInput">Gênero</label>
                <select
                  value={genre}
                  onChange={(value) => {
                    setGenre(value.target.value);
                  }}
                >
                  <option value="">--Escolha o gênero--</option>
                  {genres.map((e, i) => {
                    return <option value={e}>{e}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {step === 3 ? (
          <div className="step3">
            <div className="describe">
              <p>
                <strong>Defina o título do seu livro, </strong>o título de um
                livro representa muito sobre seu conteúdo.
              </p>{" "}
            </div>
            <input
              placeholder="Insira o título..."
              onChange={(value) => {
                setTitle(value.target.value);
              }}
              value={title}
            />
          </div>
        ) : (
          ""
        )}
        {step === 4 ? (
          <div className="step4">
            <img src={userimg} alt="preview" />
            <div className="describe">
              <h1>{title}</h1>
              <p>
                <strong>Préfacio: </strong>
                {describe}
              </p>
              <p>Data de Lançamento: {new Date(writtenin).toLocaleString()}</p>
              <p>Gênero: {genre}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {step === 5 ? (
          <div className="step5">
            <div className="describe">
              <p>
                <strong>Envio concluido com sucesso, </strong>o livro será
                analisado e em breve você receberá retorno via email.
              </p>{" "}
            </div>
            <ReactLoading type="bubbles" />
            <button onClick={() => (window.location.href = "/writer/books/")}>
              Acompanhar Análise
            </button>
          </div>
        ) : (
          ""
        )}
        {step < 5 ? (
          <button onClick={nextStep} className="nextButton">
            <ArrowForwardIosIcon />
          </button>
        ) : (
          ""
        )}

        {step > 0 && step < 5 ? (
          <button onClick={backStep} className="backButton">
            <ArrowBackIosIcon />
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="timeline">
        <div
          className="line"
          style={step === 0 ? { backgroundColor: "#e50914" } : {}}
        ></div>
        <div
          className="line"
          style={step === 1 ? { backgroundColor: "#e50914" } : {}}
        ></div>
        <div
          className="line"
          style={step === 2 ? { backgroundColor: "#e50914" } : {}}
        ></div>
        <div
          className="line"
          style={step === 3 ? { backgroundColor: "#e50914" } : {}}
        ></div>
        <div
          className="line"
          style={step === 4 ? { backgroundColor: "#e50914" } : {}}
        ></div>
        <div
          className="line"
          style={step === 5 ? { backgroundColor: "#e50914" } : {}}
        ></div>
      </div>
    </div>
  );
};

export default Newbook;
