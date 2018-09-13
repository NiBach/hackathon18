import React, { Component } from 'react';
import './App.css';
import { GeoLocation } from "react-redux-geolocation";
import { Route, Switch } from 'react-router-dom'
import SideNav from "./components/SideNav";
import CenteredMap from "./components/CenteredMap";
import CameraView from "./components/cameraView";
import UploadDialog from "./components/UploadDialog";
<<<<<<< HEAD
class App extends Component {
  render() {
    return (
      <div className="App">
=======

function addNavBar(Component, navBarProps, componentProps) { // TODO - delete,  and create full components
  return () => <div>
    <NavBar {...navBarProps}/>
    <Component {...componentProps}/>
  </div>
}
class App extends Component {
  render() {
    return (
      <div className="App">      
>>>>>>> Facebook side Nav
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
