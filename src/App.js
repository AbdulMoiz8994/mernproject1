import React, { Component } from  'react'
import './App.css';

class App extends Component{
  nameFunction=() => 'Abdul moiz';
  render(){
    // const name="Abdul moiz!"
    const loading= false; 
const showName=true

  // if(loading){
  //     return <h1>Loading...</h1>
  // }
    return(
      <div>
        {/* {loading ? <h1> Loading... </h1>: <h1>{this.nameFunction()}</h1>} */}
        {loading ? <h1> Loading... </h1> : <h1>{showName && <h1>{this.nameFunction()}</h1>}</h1>}

        {/* <h1>hello {name}</h1> */}
      </div>
    )
  }
}


export default App;
