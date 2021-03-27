import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Show from '../showDetails/Show';

const Detail = () => {
    const {id} = useParams()
    const [club, setClub] = useState([])
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setClub(data.teams))
    },[id])
    return (
        <div>
           {
               club.map(tm => <Show team={tm}></Show>)
           } 
        </div>
    );
};

export default Detail;