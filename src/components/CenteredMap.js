import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from "redux";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"
import MarkerWithInfo from './MarkerWithInfo';
import { geo } from "../storeCreator";
import { markersCollection } from "../collections";
import NavBar from "./NavBar";
import M from 'materialize-css/dist/js/materialize'


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

  state = {
    loaded: false,
    panned: false,
    places: [],
    numOfOpened: 0,
    carouselInit: false
  }
  ref = {}

  setLoaded = (e) => {
    this.ref = e;
    this.setState({
      loaded: true
    })
  }
  componentWillReceiveProps({ center, myLocation }) {
    if (!center && !this.state.panned) {
      this.ref.panTo(myLocation ? myLocation : defaultLocation);
    }
  }
  componentDidUpdate(){
    if(this.state.places.length > 0 && this.state.numOfOpened === 0 && !this.state.carouselInit){
      let elem = document.getElementById('carousel-map');
      M.Carousel.init(elem, {
        onCycleTo: htmlElem => console.log(htmlElem),
      })
      this.setState({
        carouselInit: true
      })
     // let c = M.Carousel.getInstance(elem);
      //console.log(c);
    } else if ((this.state.places.length === 0 || this.state.numOfOpened > 0) && this.state.carouselInit){
      this.setState({
        carouselInit: false
      })
    }
  }

  handlePan = () => {
    this.setState({
      panned: true,
    })
  }

  componentDidMount() {
    const { myLocation } = this.props;
    const markers = geo.collection(markersCollection);
    const center = geo.point(myLocation.lat, myLocation.lng);
    const field = 'position';
    const query = markers.within(center, 50, field);
    query.subscribe(places => this.setState({
      places: places
    }));
  }

  render() {
    const { center, zoom, myLocation } = this.props;
    let mapCenter = center ? center : (myLocation ? myLocation : defaultLocation);
    return (
      <div>
        <GoogleMap
          defaultZoom={zoom ? zoom : 17}
          defaultCenter={mapCenter}
          ref={this.setLoaded}
          onDrag={this.handlePan}
        >
          {this.state.places.map(place => <MarkerWithInfo position={{
            lat: place.position.geopoint.latitude,
            lng: place.position.geopoint.longitude
          }} title={place.title} description={place.description} key={place.id} docId={place.id} imgURL={place.imageURL} onOpen={() => this.setState({
            numOfOpened: this.state.numOfOpened+1
          })}
          onClose={() => this.setState({
            numOfOpened: this.state.numOfOpened-1
          })} />)}
        </GoogleMap>
        <NavBar/>
        {(this.state.places.length > 0 && this.state.numOfOpened === 0) ? <div className="carousel" id='carousel-map'>
          {this.state.places.map((place,n) => {
            return <a key={place.id} className="carousel-item carousel-img-container"><img className='car-img' src={place.imageURL} alt={place.title}/></a>
          })}
        </div> : null}
      </div>
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
  //withScriptjs,
  withGoogleMap
)(CenteredMap);
