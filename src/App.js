import React, { Component } from 'react';
import './App.css';
import JustList from './components/Justlist'
import NavBar from "./components/NavBar";
import AddDataModal from './components/AddDataModal'
import { GeoLocation } from "react-redux-geolocation";
import { Route, Switch } from 'react-router-dom'
import SideNav from "./components/SideNav";
import CenteredMap from "./components/CenteredMap";


function addNavBar(Component, navBarProps, componentProps) {
  return () => <div>
    <NavBar {...navBarProps}/>
    <Component {...componentProps}/>
  </div>
}
class App extends Component {
  render() {
    // let navbarHeight = window.innerWidth < 601 ? 56 : 64; // this is the height of the navbar
    // let remainingHeight = window.innerHeight - navbarHeight;
    return (
      <div className="App">
        <GeoLocation watch={true} enableHighAccuracy={true} />
        <Switch>
          <Route exact path="/" component={addNavBar(() => <div id='map-containing-div'>
            <CenteredMap/>
          </div>
          )} />
          <Route path="/sharedlist" component={addNavBar(JustList,{addToList: true})} />
        </Switch>
        <AddDataModal />
        <SideNav/>
      </div>
    );
  }
}

export default App;
