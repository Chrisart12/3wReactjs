import React, {Component} from 'react';
import './App.css';
import ListDragon from './components/ListDragon';
import ListKnight from './components/ListKnight';
import TestState from './components/TestState';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        choice: "toto"
    }
  }

  

  render() {
    
    return (
      <div className="App">
        {/* <ListDragon />
        <ListKnight /> */}
        <TestState />
      </div>
    );

  }
 
}

export default App;
