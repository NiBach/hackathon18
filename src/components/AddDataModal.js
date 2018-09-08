import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withFirestore } from 'react-redux-firebase'


class AddDataModal extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired,
    }
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleClick = () => {
        console.log(this.props);
        let { firestore } = this.props;
        firestore.collection('someData').add({
            value: this.state.name
        });
    }
    render() {
        return (
            <div id='add-data-modal' className='modal modal-fixed-footer'>
                <div className="modal-content">
                    <h4>Enter data to the list</h4>
                    <input type="text" name="dataInput" id="dataInput" onChange={this.handleChange} />
                    <label htmlFor="dataInput">Enter data</label>
                </div>
                <div className="modal-footer">
                    <a className="modal-close btn-flat transparent" onClick={this.handleClick}>Add Data</a>
                </div>
            </div>
        )
    }
}

export default withFirestore(AddDataModal)
