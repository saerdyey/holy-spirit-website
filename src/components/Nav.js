import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/holyspirit-logo.png'
import './Nav.css';

const Nav = () => {
    return(
        <div id="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link to="/holy-spirit" className="navbar-brand" id="logo"><img src={logo} alt=""/>
                <span>Barangay Holy Spirit</span> 
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/holy-spirit" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Our Barangay
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/holy-spirit/general-info" className="dropdown-item">General Info</Link>
                        <Link to="/holy-spirit/history" className="dropdown-item">History</Link>
                        <Link to="/holy-spirit/maps" className="dropdown-item">Maps</Link>
                        <a className="dropdown-item disabled" href="#">Photo Album</a>
                        <Link to="/holy-spirit/forms" className="dropdown-item">Forms</Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/holy-spirit/contact" className="dropdown-item">Contact Us</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Government
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/holy-spirit/admin" className="dropdown-item">What Department do I nedd?</Link>
                        <a className="dropdown-item" href="#">Barangay Officials</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Calendar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Associations</a>
                    </li>
                    </ul>
                </div>
                    
            </nav>
        </div>
    )
}

export default Nav;