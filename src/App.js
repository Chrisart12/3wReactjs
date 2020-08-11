import React, {Component} from 'react';
import './App.scss';
// import ListDragon from './components/ListDragon';
// import ListKnight from './components/ListKnight';
import TestState from './components/TestState';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';
import Count from './components/Count';
import Post from './components/Post';
import Checkerboard from './components/Checkerboard';

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
        {/* <Count /> */}
        {/* <Post /> */}
        <Checkerboard />
      </div>
    );

  }
 
}

export default App;
