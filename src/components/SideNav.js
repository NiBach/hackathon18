import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Facebook from './Facebook';

function sidenav ({imageURL, name}) {
    return (
        
        <ul className="sidenav" id="slide-out">
<<<<<<< HEAD
            <li><Link className='sidenav-close' to="/">Map</Link></li>
=======
            <li><div className="user-view">
                <div className="background">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/13/78/52/51/wild-food-foraging.jpg"/>
                    
                </div>
                
                <a href="#user"><img class="circle" src={imageURL}/></a>
                <a href="#name"><span class="white-text name">{name}</span></a>
                <a href="#level"><span class="white-text name">Level: Sprout</span></a>                
                </div></li>
            <li><Link className='sidenav-close' to="/">geolocation</Link></li>
            <li><Link className='sidenav-close' to="/sharedlist">list</Link></li>
>>>>>>> Facebook side Nav
            <li><Link className='sidenav-close' to="/cameraView">Camera</Link></li>
            <li><Facebook /></li>
        </ul>
    )
}

export default connect(state => ({
    imageURL: state.facebook.image,
    name: state.facebook.name
}))(sidenav)
