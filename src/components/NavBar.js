import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ({ addToList }) => {
    return (
        <div>
            <nav id='nav-id'>
                <div className="nav-wrapper blue">
                    <a className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">geolocation</Link></li>
                        <li><Link to="/sharedlist">list</Link></li>
                    </ul>
                    <a data-target="slide-out" className="sidenav-trigger hide-on-large-only left">
                        <i className="material-icons">menu</i>
                    </a>
                    {addToList ? (<a className="btn-flat right transparent modal-trigger" data-target="add-data-modal">
                        <i className="material-icons white-text">add</i>
                    </a>) : (<div></div>)}
                </div>
            </nav>
            
        </div>
    )
}

export default NavBar



