import React, { Component} from 'react';
import { connect } from 'react-redux'
import { compose } from "redux";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"
import MarkerWithInfo from './MarkerWithInfo';
import { geo } from "../storeCreator";
import { markersCollection } from "../collections";


const defaultLocation = {
  lat: 0,
  lng: 0,
}

const MapWrapper = (WrappedComponent) => (props) =>
  <div id='map-containing-div'>
    <WrappedComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCP0isnGUJW0vObC_EISH_Z-4b3JVgZ0S8&v=3.exp&libraries=geometry,drawing,places" 
    loadingElement={<div style={{ height: `100%` }} />} 
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    {...props}
    />
  </div>


class CenteredMap extends Component {
  
  state={
    loaded: false,
    panned: false,
  }
  ref = {}

  setLoaded = (e) => {
    this.ref = e;
    this.setState({
      loaded: true
    })
  }
  componentWillReceiveProps({center, myLocation}){
   if(!center && !this.state.panned){
     this.ref.panTo(myLocation ? myLocation : defaultLocation);
   }
  }

  handlePan = () => {
    this.setState({
      panned: true,
    })
  }

  componentDidMount(){
    const {myLocation} = this.props;
    const markers = geo.collection(markersCollection);
    const center = geo.point(myLocation.lat, myLocation.lng);
    const field = 'position';
    const query = markers.within(center, 50, field);
    query.subscribe(x => console.log(x));
  }

  render() {
    const { center, zoom, children, myLocation } = this.props;
    let mapCenter = center ? center : (myLocation ? myLocation : defaultLocation);
    return (
      <GoogleMap
        defaultZoom={zoom ? zoom : 17}
        defaultCenter={mapCenter}
        ref={this.setLoaded}
        onDrag={this.handlePan}
      >
        {children}
        <MarkerWithInfo position={mapCenter}/>
      </GoogleMap>
    )
  }
}
    

export default compose(
  MapWrapper,
  connect(state => ({
    myLocation: {
      lat: state.geolocation.latitude,
      lng: state.geolocation.longitude
    },
  })),
  withScriptjs,
  withGoogleMap
)(CenteredMap);
