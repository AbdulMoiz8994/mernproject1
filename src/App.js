import React, { Component } from  'react'
import './App.css';
import NavBar from './Components/Header/NavBar';

class App extends Component{
  // nameFunction=() => 'Abdul moiz';

  render(){

    return(
      <div className="container">
   <NavBar title="List of GitHub Users"/>

      </div>
    )
  }
}


export default App;
