import React from 'react';
import Card from '../Card/Card';
import './CardWrapper.css'
const CardsWrapper = ({leagues}) => {
    return (
        <div className="card-wrapper">
            {
                leagues.slice(0,50).map(league=> <Card key={league.idLeague} league={league} />)
            }
        </div>
    );
};

export default CardsWrapper;