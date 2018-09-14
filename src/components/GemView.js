import React, { Component } from 'react'
import { connect } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Comments } from 'react-facebook';

class GemView extends Component {

  state={
    recipeTitle : "",
    recipeUrl : "",
    recipeImage : ""
  };
  sendRecipeGet()
  {

        axios.get("https://api.edamam.com/search?q=" + this.props.title + "&app_id=f2661170&app_key=405d3fd787ec4090ef19cc9ae276bed3")
    .then(response => {

      let hits = response.data.hits;
      if(hits.length > 0){
      this.setState({recipeTitle: hits[0].recipe.label,
                                      recipeUrl: hits[0].recipe.url,
                                    recipeImage: hits[0].recipe.image});
                                  }});

  }
    componentDidMount() {
        M.Tabs.init(document.getElementsByClassName('tabs')[0], {
            swipeable: true,
            responsiveThreshold: window.innerWidth,
        });
        let car = document.getElementsByClassName('carousel-slider')[0];
        car.style.height = 'auto';
        car.style['min-height'] = (window.innerHeight*0.6 - 56)+'px';
        M.Tabs.getInstance(document.getElementById("tabs-swipe-demo")).select('description-tab');
        this.sendRecipeGet();
    }

    render() {
        const { imageURL, title, description } = this.props
        return (
            <div>
                <div className='gem-pic'>
                    <img src={imageURL} alt="The gem" />
                    <h3 className='bottom-left'>{title}</h3>
                    <Link to='/' className='top-left white-text'>
                        <i className="material-icons white-text">arrow_back</i></Link>
                </div>
                <div className="tabs-container">
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab"><a href="#description-tab">Description</a></li>
                        <li className="tab"><a className="active" href="#comments-tab">Comments</a></li>
                        <li className="tab"><a href="#test-swipe-3">Recipe</a></li>
                    </ul>
                    <div id="description-tab" className="white">
                        <div className="tab-container">
                            {description}
                        </div>
                    </div>
                    <div id="comments-tab">
                        <Comments href={document.location.href} />
                    </div>
                    <div id="test-swipe-3" className="white">
                    <div className="recipe-img">
                    <a href={this.state.recipeUrl}><h5 className='top-left white-text'>{this.state.recipeTitle}</h5></a>
                    <img src={this.state.recipeImage} alt="RecipeImage" className='non-logo-img'/>
                    </div>
                    </div>
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
