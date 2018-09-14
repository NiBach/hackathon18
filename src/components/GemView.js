import React, { Component } from 'react'
import { connect } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'

class GemView extends Component {

    componentDidMount() {
        M.Tabs.init(document.getElementsByClassName('tabs')[0], {
            swipeable: true,
            responsiveThreshold: window.innerWidth,
        });
        let car = document.getElementsByClassName('carousel-slider')[0];
        car.style.height = 'auto';
        car.style['min-height'] = (window.innerHeight*0.6 - 56)+'px';
    }

    render() {
        const { imageURL, title, description } = this.props
        return (
            <div>
                <div className='gem-pic'>
                    <img src={imageURL} alt="The gem" />
                    <h3 className='bottom-left'>{title}</h3>
                </div>
                <div className="tabs-container">
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab"><a href="#description-tab">Description</a></li>
                        <li className="tab"><a className="active" href="#comments-tab">Comments</a></li>
                        <li className="tab"><a href="#test-swipe-3">Test 3</a></li>
                    </ul>
                    <div id="description-tab" className="blue">
                        <div className="tab-container">
                            {description}
                        </div>
                    </div>
                    <div id="comments-tab" className="red">comments are here</div>
                    <div id="test-swipe-3" className="green">Test 3</div>
                </div>

            </div>
        )
    }
}


export default connect(state => ({
    imageURL: state.gemData.imageURL,
    title: state.gemData.title,
    description: state.gemData.description
}))(GemView)