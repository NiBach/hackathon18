import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function sidenav ({imageURL, name}) {
    return (
        <ul className="sidenav" id="slide-out">
            <li><Link className='sidenav-close' to="/">Map</Link></li>
            <li><Link className='sidenav-close' to="/cameraView">Camera</Link></li>
        </ul>
    )
}

export default connect(state => ({
    imageURL: state.facebook.image,
    name: state.facebook.name
}))(sidenav)
