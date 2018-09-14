import React, { Component } from 'react'
import { connect } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from "react-router-dom";
import axios from 'axios';


import FacebookProvider, { Comments } from 'react-facebook';

class GemView extends Component {

  state={
    recipeTitle : "",
    recipeUrl : "",
    recipeImage : ""
  };
  sendRecipeGet()
  {
    const app_key = "f2661170";
    const app_id = "405d3fd787ec4090ef19cc9ae276bed3";

        axios.get("https://api.edamam.com/search?q=" + this.props.title + "&app_id=f2661170&app_key=405d3fd787ec4090ef19cc9ae276bed3")
    .then(response => {
      console.log(response);
      let hits = response.data.hits;
      if(hits.length > 0){
        console.log("ok");
      this.setState({recipeTitle: hits[0].recipe.label,
                                      recipeUrl: hits[0].recipe.url,
                                    recipeImage: hits[0].recipe.image});
                                    console.log("start here");
                                    console.log(this.state.recipeTitle);
                                      console.log(this.state.recipeImage);
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
                    <div id="description-tab" className="blue">
                        <div className="tab-container">
                            {description}
                        </div>
                    </div>
                    <div id="comments-tab">
                        <FacebookProvider appId="1827157337399053">
                            <Comments href="http://www.facebook.com" />
                        </FacebookProvider>

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