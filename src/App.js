import React, { Component } from 'react';
import './App.css';
import JustList from './components/Justlist'
import NavBar from "./components/NavBar";
import AddDataModal from './components/AddDataModal'
import { GeoLocation } from "react-redux-geolocation";
import { Route, Switch } from 'react-router-dom'
import SideNav from "./components/SideNav";
import CenteredMap from "./components/CenteredMap";
import CameraView from "./components/cameraView";
import UploadDialog from "./components/UploadDialog";


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
        <GeoLocation watch={true} enableHighAccuracy={true} />
        <Switch>
          <Route exact path="/" component={addNavBar(CenteredMap,{addToList: false})} />
          <Route path="/sharedlist" component={addNavBar(JustList,{addToList: true})} />
          <Route path="/cameraView" component={CameraView} />
          <Route path="/cameraDialog" component={UploadDialog}/>
        </Switch>
        <AddDataModal />
        <SideNav/>
      </div>
    );
  }
}

export default App;
