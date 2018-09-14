import React, { Component } from 'react';
import facebookAction from "../actions/facebookAction";
import { connect } from "react-redux";
import { Login } from 'react-facebook';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        // userID: '',
        // name: '',
        // email: '',
        // picture: ''
    }
    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            //   userID: response.userID,
            //   name: response.name,
            //   email: response.email,
            //   picture: response.picture.data.url
        });
        this.props.dispatch(facebookAction('', response.profile.first_name));
    }
    componentClicked = () => console.log('clicked');


    render() {
        return (
                this.state.isLoggedIn ? null : <Login
                    scope="email"
                    onResponse={this.responseFacebook}
                    onError={this.handleError}
                >
                    <span>Login via Facebook</span>
                </Login>
        );
    }
}


export default connect()(Facebook)