import React from 'react'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
//import { useParams } from "react-router-dom";
import './PdfViewer.css'
import Pdf from '../../assets/pdf.pdf'

const PdfViewer = () => {
    //  let { id } = useParams();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className="pdfviewer" >
            <Viewer fileUrl="https://pdfsfulpi.s3-sa-east-1.amazonaws.com/pdf.b698684b.pdf"
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    )
}
export default PdfViewer;