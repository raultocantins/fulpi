import React from 'react'
import './ReleaseCard.css'
import Paper from "@material-ui/core/Paper";
import Perfil from '../../../assets/perfil2.jpg'
const releaseCard=() => {
    return (
        <Paper className="releaseCard" >
            <img src={Perfil} alt="perfil" />
            <div className="describe">               
                <button>
                    Ver mais..
                </button>
               
            </div>
        </Paper>
    )
}

export default releaseCard;