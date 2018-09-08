import React, { Component } from 'react';
import './App.css';
import JustList from './components/Justlist'
import NavBar from "./components/NavBar";
import AddDataModal from './components/AddDataModal'
import { GeoLocation } from "react-redux-geolocation";
import { Route, Switch } from 'react-router-dom'
import SideNav from "./components/SideNav";
import { connect } from 'react-redux'




function geolocationCom({geolocation}){
  console.log(geolocation);
  return <div className="center">
    <p>{geolocation.latitude + ',' + geolocation.longitude}</p>
  </div>
}


let Compo = connect(state => ({
  geolocation: state.geolocation
}))(geolocationCom);

function addNavBar(Component, navBarProps, componentProps) {
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
          <Route exact path="/" component={addNavBar(Compo)} />
          <Route path="/sharedlist" component={addNavBar(JustList,{addToList: true})} />
        </Switch>
        <AddDataModal />
        <SideNav/>
      </div>
    );
  }
}

export default App;
