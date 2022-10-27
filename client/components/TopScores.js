import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TopScores = (props) => {
    const navigate = useNavigate();
    const server = axios.create({
      baseURL: 'http://localhost:3000/',
    });
    axios
        .get('/game/scores')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    return (
        <div className='topScores'>
            <p>Reaction Time: {'hello'}</p>
            <p>Number Memory: {'goodbye'}</p>
        </div>
    )
}

export default TopScores;