import React from 'react'
import Axios from 'axios'

export default class HistoryPage extends React.Component {
    onChange(img) {
        const data = new FormData();
        data.append("image", img.target.files[0]);
        Axios.post("http://localhost:4000/history", data)
            .then((res) => {
                console.log(res.data.image[0])
                //setImg(res.data.url);

            })
            .catch((err) => {
                console.log(err);

                alert("Error ao enviar Imagem");
            });
    }

    onChangePdf(pdf) {
        const data = new FormData();
        data.append("file", pdf.target.files[0]);
        Axios.post("http://localhost:4000/history", data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
                alert("Error ao enviar Imagem");
            });
    }





    render() {
        return (<div className="historyPage">

            <input
                type="file"
                onChange={this.onChange}
                className="input"
                id="icon-button-file"
            />
                  <input
                type="file"
                onChange={this.onChangePdf}
                className="input"
                id="icon-button-file"
            />
            <h1>History page</h1>
        </div>)
    }
}