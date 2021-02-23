import React, { Component } from  'react'
import './App.css';
import NavBar from './Components/Header/NavBar';
// import UserItem from './Components/Users/UserItem' 
import Users from './Components/Users/Users'
import axios from 'axios'


class App extends Component{
  // nameFunction=() => 'Abdul moiz';
  state={
    users: [],
    laoding: false
  }
  async componentDidMount(){
    this.setState({laoding: true})
    try{
 const {data}= await axios.get('https://api.github.com/users') 
//  console.log(data)
 this.setState({users: data,laoding: false})
    }
    catch(error){
      return error
    }
   }
  render(){

    return(
      <div className="container">
   <NavBar title="List of GitHub Users By Abdul Moiz"/>
 {/* <UserItem/> */}
 <div className="container">
     <Users laoding={this.state.laoding} users={this.state.users}/>
     </div>
      </div>
    )
  }
}


export default App;
