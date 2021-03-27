import React from 'react';
import './Show.css'
import img2 from './Photo/female.png'
import img1 from './Photo/male.png'
import LogoShow from '../LogoShow/LogoShow';
const Show = (props) => {
    const {strTeam,strCountry,strGender,intFormedYear,strDescriptionEN,strTeamLogo,strFacebook} = props.team
    
    let greetings;
    if (strGender === 'Male'){
        greetings = img1
    }
    else{
        greetings = img2
    }
    return (
        <>
        <LogoShow logo={strTeamLogo} ></LogoShow>
        <div className='main-div'>
            <div className="search-result col-md-8 mx-auto py-4">
                <div className="single-result row align-items-center my-3 p-3">
                    <div className="col-md-9">
                        <h3 className="lyrics-name">{strTeam}</h3>
                        <p className="author lead">Founded : <span>{intFormedYear}</span></p>
                        <p>Country : {strCountry}</p>
                        <p>Gender : {strGender}</p>
                    </div>
                    <div className="col-md-3 text-md-right text-center">
                            <img className='images' src={greetings} alt=""/>
                    </div>
                </div>
            </div>
            <h3>Description......</h3>
            <h1 className='text-center'>ENGLISH</h1>
            <p>{strDescriptionEN}</p>
        </div>
        
        </>
    );
};

export default Show;