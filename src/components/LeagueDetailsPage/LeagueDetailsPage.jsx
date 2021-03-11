import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Error from "../Error/Error";
import Header from "../Header/Header";
import LeagueDetails from "../LeagueDetails/LeagueDetails";
import "./LeagueDetailsPage.css";

const LeagueDetailsPage = () => {
    const { id } = useParams();
    const [status, setStatus] = useState(true);
    const [leagueDetails, setLeagueDetails] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then((res) => res.json())
            .then((apiData) => {
                const [league] = apiData.leagues;
                if (!apiData.leagues || apiData.leagues === "Invalid League ID passed") {
                    return setStatus(false);
                }
                setLeagueDetails(league);
            })
            .catch(() => setStatus(false));
    }, [id]);

    return (
        <>
            <Header white>
                <img
                    style={{ width: "120px" }}
                    src={leagueDetails.strBadge}
                    alt="badge"
                />
            </Header>
            {
                status ? <LeagueDetails leagueDetails={leagueDetails} /> : <Error />
            }
        </>
    );
};

export default LeagueDetailsPage;
