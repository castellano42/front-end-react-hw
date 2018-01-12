import React, { Component } from 'react';
import Image from './components/Image';
import dataModel from './dataModel';
import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {};
    this.state.images = dataModel.data;
    this.state.score = 0
  }


  onCatClicked(e, imageUrl){
    dataModel.setUrl(imageUrl);
    let images = dataModel.shuffleImages()
    let score = dataModel.getScore(); 
    this.setState({
      images: images, 
      score: score
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">your score is: {this.state.score}</h1>

        </header>
        <div className="grid-wrap">

          {this.state.images.map(imageURL => 
            <Image key={imageURL} 
            url={imageURL} 
            onClick={(e) => this.onCatClicked(e, imageURL)}
            />)}


          </div>
      </div>
    );
  }
}

export default App;
