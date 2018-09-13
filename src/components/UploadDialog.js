import React, { Component } from 'react'
import { connect } from 'react-redux'
import { geo } from "../storeCreator";
import { markersCollection } from "../collections";
import { compose } from 'redux';
import { withFirestore, withFirebase } from 'react-redux-firebase';
import { push } from 'connected-react-router';

class UploadDialog extends Component {

    state = {
        title: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleUpload = () => {
        console.log('clicked');
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const markers = geo.collection(markersCollection);
            const id = this.props.firestore.collection(markersCollection).doc().id;
            markers.setDoc(id,{
                title: this.state.title,
                description: this.state.description,
                position: geo.point(lat, lng).data, 
            });
            let ref = this.props.firebase.storage().ref().child(id + '/pic.jpg'); // TODO - change the name, and upload location as well
            ref.putString(this.props.dataUri, 'data_url').then( () => console.log('uploaded')).catch(() => console.log('error:('));
            this.props.dispatch(push('/'));
        });
    }

    render() {
        return (
            <div>
                <div style={{
                    height: '40vh',
                    width: '100vw',
                    overflow: 'hidden',
                }}>
                    <img src={this.props.dataUri} alt='' style={{
                        marginBottom: '30vh'
                    }} />
                </div>
                <div className="container">

                    <div className="input-field">
                        <input type="text" name="title" id="image-upload-title" onChange={this.handleChange} />
                        <label htmlFor="image-upload-title">Enter title</label>
                    </div>
                    <div className="input-field">
                        <textarea className='materialize-textarea' name="description" id="image-upload-description" onChange={this.handleChange} />
                        <label htmlFor="image-upload-description">Enter description</label>
                    </div>
                </div>
                <footer className='page-foote'>
                    <div className="container">
                        <div className="btn-flat transparent" onClick={this.handleUpload}>Upload</div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default compose(
    withFirestore,
    withFirebase,
    connect(state => ({
        dataUri: state.ImageUri.uri,
    }),
))(UploadDialog)