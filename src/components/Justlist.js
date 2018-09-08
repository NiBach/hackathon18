import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


class JustList extends Component {
  render() {
    return (
        <div>
            {
            isLoaded(this.props.someData) ? (
                isEmpty(this.props.someData) ? (
                 <p className="center">
                     No Data
                     </p>   
                ) : (
                <ul className="collection">
                    {this.props.someData.map(doc => {
                            return <li className="collection-item" key={doc.id}>{doc.value}</li>
                        })}
                </ul>)
                ) : (
                    <p className="center">
                        loading...
                </p>
                )
            }
        </div>
    )
  }
}


export default compose(
    firestoreConnect(['someData']),
    connect((state, props) => {
        return ({
        someData: state.firestore.ordered.someData
    })})
)(JustList)