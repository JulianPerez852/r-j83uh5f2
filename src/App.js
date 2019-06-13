import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contador:0,
    }
    this.onChangeText=this.onChangeText.bind(this);
  }

  onChangeText(e){
    const conteo = e.target.value.length
    this.setState({
      contador: conteo 
    })
  }

  render() {
    const { contador }= this.state
    return (
      <div className="container">
        <textarea rows="3" onChange={(value)=>this.onChangeText(value)} ></textarea>
        <div className="counter">{contador}</div>
      </div>
    );
  }
}

export default App;
