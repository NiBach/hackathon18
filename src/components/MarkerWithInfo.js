import React, { Component } from 'react'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { Marker} from "react-google-maps"


export default class MarkerWithInfo extends Component {
  state = {
      opened: false,
  }

  handleMarkerClick = () =>{
      this.setState({
          opened: !this.state.opened,
      })
  }

  render() {
      const {position} = this.props;

      let card =
                  <div className="card">
                      <div className="card-image">
                  <img src="https://materializecss.com/images/sample-1.jpg"/>
                              <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                          </div>
                          <div className="card-action">
                              <a href="#">This is a link</a>
                          </div>
                      </div>



      return (
          <Marker position={position} onClick={this.handleMarkerClick}>
              {this.state.opened ? <InfoBox options={{
                  pixelOffset: new window.google.maps.Size(-(window.innerWidth * 0.3), 0),
                  boxStyle: {
                      opacity: 1,
                      width: "60vw"
                  }
                  , closeBoxURL: ""
                  , enableEventPropagation: false
              }
              } >
                  {card}
              </InfoBox>: null}
      </Marker>
      )
  }
}
