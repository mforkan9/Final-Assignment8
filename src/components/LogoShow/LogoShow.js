import React from 'react';
import './LogoShow.css'
const LogoShow = (props) => {
    return (
        <div className='logo'>
            <img src={props.logo} alt="" srcset=""/>
        </div>
    );
};

export default LogoShow;