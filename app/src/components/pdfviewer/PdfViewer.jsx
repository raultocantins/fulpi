import { React, useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useParams } from "react-router-dom";
import "./PdfViewer.css";
//import Pdf from "../../assets/pdf.pdf";
import Loading from "../../shared/loading/Loading";

const PdfViewer = () => {
  let { id } = useParams();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [loading, setLoading] = useState(true);

  function handleLoading() {
    setLoading(false);
  }
  return (
    <div className="pdfviewer">
      {loading ? Loading() : ""}
      <Viewer
      onZoom={()=>alert()}
        onDocumentLoad={handleLoading}
        fileUrl={`https://fulpihistory.s3.sa-east-1.amazonaws.com/${id}`}
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  );
};
export default PdfViewer;
