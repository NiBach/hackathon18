import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Facebook from './Facebook';

function sidenav ({imageURL, name}) {
    return (
        
        <ul className="sidenav" id="slide-out">
            <li><div className="user-view">
                <div className="background">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/13/78/52/51/wild-food-foraging.jpg"/>
                    
                </div>
                <h2 style={{ padding: "10px 20px"}}> </h2>
               
                <a><span className="white-text name"><h5>Happy Foraging, {name}!</h5></span></a>
                <a><span className="white-text name"><h6>Level: Sprout</h6></span></a>                
                </div></li>
            <li><Link className='sidenav-close' to="/"><i class="material-icons">map</i>cEATy map</Link></li>
            <li><div class="divider"></div></li>
            <li><Link className='sidenav-close' to="/cameraView"><i class="material-icons">add_location</i>Fresh finding</Link></li>
            <li><div class="divider"></div></li>           
            <li><a class="subheader"><i class="material-icons">business</i>All about us</a></li>
            <li><a><Facebook /></a></li>
        </ul>
    )
}

export default connect(state => ({
    imageURL: state.facebook.image,
    name: state.facebook.name
}))(sidenav)
