import React from 'react';
import './InfoData.css';
import { Comments, Photos, Posts, Todos, Users } from '../displays';

const InfoData = ({ appState }) => {
    const arrOfComponents = {
        posts: <Posts data={appState.data} />,
        comments: <Comments data={appState.data} />,
        photos: <Photos data={appState.data} />,
        todos: <Todos data={appState.data} />,
        users: <Users data={appState.data} />,
    }
    return (
        <div className='info-data'>
            {arrOfComponents[appState.display]}
        </div>
    );
};

export default InfoData;