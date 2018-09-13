import React from 'react'
import { Link } from "react-router-dom";

export default () => {
    return (
        <ul className="sidenav" id="slide-out">
            <li><Link className='sidenav-close' to="/">Map</Link></li>
            <li><Link className='sidenav-close' to="/cameraView">Camera</Link></li>
        </ul>
    )
}
