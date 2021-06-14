import React from 'react'
import Axios from 'axios'
import './HistoryPage.css'

export default class HistoryPage extends React.Component {
  state={
      image:"",
      link:""
  }
constructor(props){
    super(props)
    this.onChangeImage=this.onChangeImage.bind(this)
    this.onChangePdf=this.onChangePdf.bind(this)
}
    onChangeImage(file) {
        var data = new FormData();
        data.append("file", file.target.files[0]);

        Axios.post("http://localhost:4000/history/uploads", data)
        .then((res) => {
            alert('deu certo')
            this.setState({
                image:res.data
            })
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);

            alert("Error ao enviar Imagem");
        });
    }
    onChangePdf(file) {
        var data = new FormData();
        data.append("file", file.target.files[0]);
        Axios.post("http://localhost:4000/history/uploads", data)
        .then((res) => {
            alert('deu certo')
            this.setState({
                link:res.data
            })
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);

            alert("Error ao enviar Imagem");
        });
    }
    submit() {
      alert('ainda não implementado')
    }

    render() {
        return (<div className="historyPage">

            <input
                type="file"
                onChange={this.onChangeImage}
                className="input"
                id="icon-button-file"
            />
            <h1>History page</h1>
            <button onClick={this.submit}>Enviar</button>
            <input
                type="file"
                onChange={this.onChangePdf}
                className="input"
                id="icon-button-file"
            />

            <img src={this.state.image} alt="preview"/>
            <h1> link do pdf {this.state.link}</h1>
        </div>)
    }
}