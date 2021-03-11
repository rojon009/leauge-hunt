import React, { useEffect, useState } from 'react';
import CardsWrapper from '../CardsWrapper/CardsWrapper';
import Header from '../Header/Header';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(res => setLeagues(res.leagues))
    }, [])

    return (
        <>
            <Header>
                <h1>League Hunt</h1>
            </Header>
            <CardsWrapper leagues={leagues} />
        </>
    );
};

export default Home;