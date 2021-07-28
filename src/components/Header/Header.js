import React from 'react';
import './Header.css';
import MainNav from '../MainNav';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <span onClick={() =>window.scroll(0,0)} className="header">
            <div className="title-Header">
            <img className='estilos-imagen' src={logo}  alt="logo"/>
            REACT MOVIES
            </div>   
            <br/>
            <MainNav/>
        </span>
    )
}

export default Header
   