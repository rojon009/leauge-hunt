import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

import './LeagueDetailsPage.css'
import LeagueDetails from '../LeagueDetails/LeagueDetails';


const LeagueDetailsPage = () => {
    const {id} = useParams();
    const [leagueDetails, setleagueDetails] = useState({strGender: 'defaultString'});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(res => res.leagues[0])
        .then(data => { setleagueDetails(data); })
    }, [id]);
    

    return (
        <>
            <Header>
                <h1>Details Page</h1>
            </Header>
            <LeagueDetails leagueDetails={leagueDetails}/>
        </>
    );
};

export default LeagueDetailsPage;