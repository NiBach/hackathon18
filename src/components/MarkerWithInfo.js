import React, { Component } from 'react'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { Marker} from "react-google-maps"
import { withFirebase } from 'react-redux-firebase';
import RadishIcon from '../assets/radish.png'

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
      console.log(url);
    })
  }

  render() {
      const {position, title, description} = this.props;

      let card =
                  <div className="card">
                      <div className="card-image">
                  <img 
                    src={this.state.imageURL}
                    data-target='camera-modal'
                    className='modal-trigger'
                    alt={description}/>
                              <span className="card-title">{title}</span>
                        </div>
                        <div className="card-content">
                              <p>{description}</p>
                          </div>
                          <div className="card-action">
                            <a data-target='camera-modal' className='modal-trigger'>More...</a>
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

export default withFirebase(MarkerWithInfo);
