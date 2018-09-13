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
      const {position, title, description} = this.props;

      let card =
                  <div className="card">
                      <div className="card-image">
                  <img src="https://materializecss.com/images/sample-1.jpg"/>
                              <span className="card-title">{title}</span>
                        </div>
                        <div className="card-content">
                              <p>{description}</p>
                          </div>
                          <div className="card-action">
                              <a>This is a link</a>
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
