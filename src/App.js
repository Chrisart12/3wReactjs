import React, {Component} from 'react';
import './App.scss';
// import ListDragon from './components/ListDragon';
// import ListKnight from './components/ListKnight';
import TestState from './components/TestState';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        choice: "toto"
    }
  }


  render() {
    
    return (
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <ListDragon />
        <ListKnight /> */}
        {/* <TestState /> */}
        <CountOne />
        <CountTwo />
      </div>
    );

  }
 
}

export default App;
