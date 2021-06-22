import { React, useState } from "react";
import Axios from 'axios'
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useParams } from "react-router-dom";
import "./PdfViewer.css";
import Loading from "../../shared/loading/Loading";
import { useDispatch } from "react-redux";
function favorite(id) {
  return { type: "FAVORITE_BOOK", id };
}
const PdfViewer = () => {
  let { id,historyId } = useParams();
  const dispatch = useDispatch();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [loading, setLoading] = useState(true);

  function handleLoading() {
    setLoading(false);
  }
  function favoriteHistory() {
    let userToken = JSON.parse(window.localStorage.getItem("token"));
    Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userToken.token}`;
    Axios.post(`http://fulpibackend.ngrok.io/favorite/book/${historyId}`)
      .then(res => {
        dispatch(favorite(id));    
        alert('historia marcada como favorita')
      })
      .catch(err => {
        alert('error')
        console.log(err)
      }) 

    }
  return (
    <div className="pdfviewer">
      {loading ? Loading() : ""}
      <button onClick={favoriteHistory}>Favoritar</button>
      <Viewer
        onZoom={() => alert()}
        onDocumentLoad={handleLoading}
        fileUrl={`https://fulpihistory.s3.sa-east-1.amazonaws.com/${id}`}
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  );
};
export default PdfViewer;
