import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    const [count, setCount] = useState([])

    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setCount(data.teams))
    },[])
    return (
        <div>
            <Header></Header>
            {
                count.map(cd => <Cart team={cd}></Cart>)
            }
            
        </div>
    );
};

export default Home;