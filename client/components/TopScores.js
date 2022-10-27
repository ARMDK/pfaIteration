import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TopScores = (props) => {
    const navigate = useNavigate();
    const server = axios.create({
      baseURL: 'http://localhost:3000/',
    });


    const [scoresArray, setScores] = useState([]);

    useEffect(() => {
        axios
            .get('/game/scores')
            .then(res => setScores(res.data.slice(0)))
            .catch(err => console.log(err))
    }, [])
    
    console.log('after', scoresArray);

    return (
        <div className='topScores'>
            <table className ='scoreTable'>
                <tr>
                    <th>Name of Game</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>Reaction Time</td>
                    <td>{scoresArray[0] ? scoresArray[0].top_score : null}</td>
                </tr>
                <tr>
                    <td>Number Memory</td>
                    <td>{scoresArray[1] ? scoresArray[1].top_score : null}</td>
                </tr>
            </table>
        </div>
    )
}

export default TopScores;