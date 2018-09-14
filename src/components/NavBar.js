import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/LogoTeal.png';

//import Icon from 'react-materialize'

const NavBar = ({ addToList }) => {
    return (
        <div>
            <nav id='nav-id'>
                <div className="nav-wrapper teal darken-1">

                    <a className="brand-logo right"><img src={logo} height='54'></img></a>
                    <a data-target="slide-out" className="sidenav-trigger hide-on-large-only left">
                        <i className="material-icons">menu</i>
                    </a>
                    <Link className="brand-logo btn-floating btn-large waves-effect waves-light red center" to="/cameraView"><i className="material-icons teal lighten-4">add_location</i></Link>

                </div>
            </nav>

        </div>
    )
}

export default NavBar
