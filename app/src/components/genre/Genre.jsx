import React,{useState} from 'react'
import {Link, useParams } from "react-router-dom";
import './Genre.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
const Genre=()=>{
    var { id } = useParams(); 
    const[books,setBooks]=useState([{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
])
const [loading,setLoading]=useState(false)
  

function addNewBooks(){
    var newBooks=[{id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"},
    {id:1,img:"https://www.chilli360.com.br/wp-content/uploads/banner_netflix_chilli360.jpg"}
   ]
       setBooks([...books,...newBooks])
}
    return(
        <div className="genre">    
        <h1>{id}</h1>
            <div className="row">
                {books.map(e=>{
                    return  <Link to={`/app/book/${e.id}`}>
               <div key={e.id} className="row--item">
                    <img src={e.img} alt="capa"/>                  
                </div>
                    </Link>
                })}                             
             <button onClick={addNewBooks} className="loadingBooks">{!loading?<ExpandMoreIcon style={{fontSize:"30px"}}/>:<CircularProgress color="#fff" />}</button>
            </div>
        </div>
    );
}
export default Genre;