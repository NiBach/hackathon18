import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ({ addToList }) => {
    return (
        <div>
            <nav id='nav-id'>
                <div className="nav-wrapper blue">
                    <a className="brand-logo">Logo</a>
                    <a data-target="slide-out" className="sidenav-trigger hide-on-large-only left">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
            
        </div>
    )
}

export default NavBar



