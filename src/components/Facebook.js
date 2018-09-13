import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import facebookAction from "../actions/facebookAction";
import { connect } from "react-redux";

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        // userID: '',
        // name: '',
        // email: '',
        // picture: ''
    }
    responseFacebook = response => {
        this.props.dispatch(facebookAction(response.picture.data.url, response.name));
      this.setState({
          isLoggedIn: true,
        //   userID: response.userID,
        //   name: response.name,
        //   email: response.email,
        //   picture: response.picture.data.url
      });
    }
    componentClicked = () => console.log('clicked');

    render() {
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent=( null
            // <div 
            // style={{
            //   //  width: "400px",
            //     margin: "auto",
            //     background:"#FFFFFF",
            //    // padding: "20px"

            // }}
            
            
            // >
            //     <img src = {this.state.picture} alt={this.state.name}/>
            //      Baby cEATer {this.state.name}
            // </div>

          
            );
        } else {
        fbContent= (<FacebookLogin
            appId="1827157337399053"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);    
        }
        return (
            <div>{fbContent}</div>
        )
    }
}


export default connect()(Facebook)