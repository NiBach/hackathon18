import React, { Component } from 'react'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { Marker} from "react-google-maps"
import { withFirebase } from 'react-redux-firebase';


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
                  <img src={this.state.imageURL}/>
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

export default withFirebase(MarkerWithInfo);
