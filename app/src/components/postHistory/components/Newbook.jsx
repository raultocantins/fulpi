import { React, useState, useEffect } from "react";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ReactLoading from "react-loading";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import "./Newbook.css";

const Newbook = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userimg, setUserImage] = useState("");
  const [link, setLink] = useState("");
  function nextStep() {
    if (step < 4) {
      setStep(step + 1);
    }
  }
  function backStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function onChangeImage(file) {
    var data = new FormData();
    data.append("file", file.target.files[0]);
    Axios.post("https://uploadtesteraws.herokuapp.com/posts", data)
      .then((res) => {
        console.log(res.data.url);
        setUserImage(res.data.url);
        //  alert("deu certo");
      })
      .catch((err) => {
        console.log(err);
        alert("Error ao enviar Imagem");
      });
  }
  function onChangePdf(file) {
    var data = new FormData();
    data.append("file", file.target.files[0]);
    Axios.post("http://localhost:4000/history/uploads", data)
      .then((res) => {
        setLink(res.data.url);
        console.log(res.data.url);
      })
      .catch((err) => {
        console.log(err);

        alert("Error ao enviar Imagem");
      });
  }

  return (
    <div className="newbook">
      <div className="box">
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
                  <ReactLoading color="red" type="spinningBubbles" />
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
                  <strong>Selecione o arquivo pdf, </strong>
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
                  <ReactLoading color="red" type="spinningBubbles" />
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
            <h1>step 2</h1>
          </div>
        ) : (
          ""
        )}
        {step === 3 ? (
          <div className="step3">
            <h1>step 3</h1>
          </div>
        ) : (
          ""
        )}
        {step === 4 ? (
          <div className="step4">
            <button>Step 04</button>
          </div>
        ) : (
          ""
        )}
        <button onClick={nextStep} className="nextButton">
          <ArrowForwardIosIcon />
        </button>
        <button onClick={backStep} className="backButton">
          <ArrowBackIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Newbook;
