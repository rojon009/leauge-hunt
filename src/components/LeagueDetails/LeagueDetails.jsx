import React from 'react';
import maleImg from '../../images/male.png'
import femaleImg from '../../images/female.png'
import mixedImg from '../../images/mixed.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '../../icons/facebook.svg';
import TwitterIcon from '../../icons/twitter.svg';
import YoutubeIcon from '../../icons/youtube.svg';
import WebsiteIcon from '../../icons/website.svg';
import SocialLink from '../SocialLink/SocialLink';

import './LeagueDetails.css'

const LeagueDetails = ({leagueDetails}) => {
    const {strSport, strLeagueAlternate, intFormedYear, strGender, strCountry,strLeague, strWebsite, strFacebook, strTwitter, strYoutube, strDescriptionEN, strDescriptionDE, strDescriptionIT, strDescriptionCN} = leagueDetails;

    
    
    return (
        <div className="league-details-page"> 
            <div className="preview">
                <div className="preview-detail">
                    <h3 className="title">{strLeagueAlternate || strLeague}</h3>
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</p>
                </div>
                <div className="preview-img">
                    {
                        strGender === 'Male' && <img src={maleImg} alt="male"/>
                    }
                    {
                        strGender === 'Female' && <img src={femaleImg} alt="male"/>
                    }
                    {   
                        strGender === 'Mixed' && <img src={mixedImg} alt="male"/>
                    }
                </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionDE || strDescriptionCN || strDescriptionIT}</p>
            </div>
            <div className="social-icons">
                <SocialLink link={strWebsite || 'https://www.programming-hero.com/'} icon={WebsiteIcon} />
                <SocialLink link={strFacebook || 'https://www.facebook.com'} icon={FacebookIcon} />
                <SocialLink link={strTwitter || 'https://www.twitter.com'} icon={TwitterIcon} />
                <SocialLink link={strYoutube || 'https://www.youtube.com'} icon={YoutubeIcon} />
            </div>
            </div>
    );
};

export default LeagueDetails;