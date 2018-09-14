import React, { Component } from 'react'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { Marker} from "react-google-maps"
import { withFirebase } from 'react-redux-firebase';
import RadishIcon from '../assets/radish.png'
import { connect } from "react-redux";
import { compose } from "redux";
import { push } from 'connected-react-router';
import gemDataAction from "../actions/getDataAction";


class MarkerWithInfo extends Component {
  state = {
      opened: false,
      imageURL: ''
  }

  handleMarkerClick = () =>{
      this.setState({
          opened: !this.state.opened,
      })
  }

  componentDidMount() {
      this.props.firebase.storage().ref().child(this.props.docId + '/pic.jpg').getDownloadURL().then(url => {this.setState({
          imageURL: url
      })
    })
  }
  routeToGemView = () => {
      const {imageURL} = this.state;
      const {title, description, docId} = this.props;
    this.props.dispatch(gemDataAction(imageURL,title,description));
    this.props.dispatch(push('/gem/' + docId));
  }

  render() {
      const {position, title, description} = this.props;

      let card =
                  <div className="card">
                      <div className="card-image">
                  <img 
                    src={this.state.imageURL}
                    alt={description}/>
                              <span className="card-title">{title}</span>
                        </div>
                        <div className="card-content">
                              <p>{description}</p>
                          </div>
                          <div className="card-action">
                            <a onClick={this.routeToGemView}>More...</a>
                            <a onClick={this.handleMarkerClick}>close</a>
                          </div>
                      </div>



      return (
          <Marker position={position} icon={RadishIcon} onClick={this.handleMarkerClick}>
              {this.state.opened ? <InfoBox options={{
                  pixelOffset: new window.google.maps.Size(-(window.innerWidth * 0.3), 0),
                  boxStyle: {
                      opacity: 1,
                      width: "60vw"
                  }
                  , closeBoxURL: ""
                  , enableEventPropagation: true
              }
              } >
                  {card}
              </InfoBox>: null}
      </Marker>
      )
  }
}

export default compose(
    withFirebase,
    connect(),
)(MarkerWithInfo);
