import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.css'

const Loading=()=>{
    return(
        <ReactLoading type="bubbles" height={300} width={300} className="loading"/>
    )
}
export default Loading;