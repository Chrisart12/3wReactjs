import React, {Component} from 'react';
import './App.scss';
// import ListDragon from './components/ListDragon';
// import ListKnight from './components/ListKnight';
import TestState from './components/TestState';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';
import Count from './components/Count';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        choice: "toto"
    }
  }


  render() {
    
    return (
      <div >
        {/* <ListDragon />
        <ListKnight /> */}
        {/* <TestState /> */}
        {/* <CountOne />
        <CountTwo /> */}
        <Count />
      </div>
    );

  }
 
}

export default App;
