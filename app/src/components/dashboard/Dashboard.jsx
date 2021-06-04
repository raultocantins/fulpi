import React from 'react'
import './Dashboard.css'
import Paper from "@material-ui/core/Paper";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FaceIcon from '@material-ui/icons/Face';
import ReleaseCard from './components/ReleaseCard'
export default class Dashboard extends React.Component {
    //components
    render() {
        return (
            <div className="dashboard">
                <h3>Comédia</h3>
                <div className="genre">
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                </div>
                <h3>Romance</h3>
                <div className="genre">
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />

                </div>
                <h3>Ação</h3>
                <div className="genre">
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                </div>
                <h3>Ficção</h3>
                <div className="genre">
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                    <ReleaseCard />
                </div>
            </div>
        )
    }
}
