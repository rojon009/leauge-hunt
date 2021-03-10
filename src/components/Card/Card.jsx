import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = ({league}) => {
    const {idLeague,strLeague,strSport,strLeagueAlternate} = league;
    const [leagueDetails, setLeagueDetails] = useState({})
    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(res => res.leagues[0])
        .then(res => setLeagueDetails(res))
    },[idLeague]);

    return (
        <div className="card">
            <img src={leagueDetails.strBadge} alt="logo"/>
            <span className="title">{strLeagueAlternate || strLeague}</span>
            <span className="type">Sports Type: {strSport}</span>
            <Link className="link" to={`/league/${idLeague}`}>Explore <FontAwesomeIcon style={{fontSize: '14px'}} icon={faArrowRight} /></Link>
        </div>
    );
};

export default Card;