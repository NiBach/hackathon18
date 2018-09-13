import React, { Component } from 'react';
import './App.css';
import { GeoLocation } from "react-redux-geolocation";
import { Route, Switch } from 'react-router-dom'
import SideNav from "./components/SideNav";
import CenteredMap from "./components/CenteredMap";
import CameraView from "./components/cameraView";
import UploadDialog from "./components/UploadDialog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeoLocation watch={true} enableHighAccuracy={true} />
        <Switch>
          <Route exact path="/" component={CenteredMap} />
          <Route path="/cameraView" component={CameraView} />
          <Route path="/cameraDialog" component={UploadDialog}/>
        </Switch>
        <SideNav/>
      </div>
    );
  }
}

export default App;
