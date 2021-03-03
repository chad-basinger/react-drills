import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterFoods: "",
      foods: ['ice cream', 'pizza', 'candy corn', 'pickles', 'corn dogs']
    };

    this.filterFoods = this.filterFoods.bind(this);
  }

  filterFoods(val){
    this.setState({filterFoods: val})
  }

  render(){
    let foodsList = this.state.foods
    .filter((e) => {
      return e.includes(this.state.filterFoods);
    })
    .map((e, index) => {
      return <h2 key={index}>{e}</h2>
    });
    return (
      <div className="App">
        <header className="App-header">
          <input
              onChange={(e) => this.filterFoods(e.target.value)}
              type="text"
          />
          <p>{foodsList}</p>
        </header>
      </div>
    );
  }
}

export default App;
