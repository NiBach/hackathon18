 import React from 'react';
 import { connect } from 'react-redux'
 import { compose } from "redux";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const CenteredMap = ({center, zoom}) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={center}
    >
        {<Marker position={center} />}
    </GoogleMap>

export default compose(
  connect(state => ({
    center: {
      lat: state.geolocation.latitude,
      lng: state.geolocation.longitude
    },
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCP0isnGUJW0vObC_EISH_Z-4b3JVgZ0S8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  })),
  withScriptjs,
  withGoogleMap
)(CenteredMap);
