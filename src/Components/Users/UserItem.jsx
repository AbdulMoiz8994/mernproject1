import React, { Component } from 'react'
import { FcApproval } from "react-icons/fc";
// import './UserItem.module.css'

class UserItem extends Component {
//    constructor(){
    //    super()
    //    state={
    //        login: "mojombo",
    //        id: '1',
    //        html_url: "https://github.com/mojombo",
    //        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //    }
//    }

    render() {
        const {login,html_url,avatar_url} =this.props.users
        // console.log(this.props.users)
        return (

            <div className="card text-center">
              <img src={avatar_url} alt="man" className="round-img" style={{width: '200px'}}/>
              <h1>{login} <h4><FcApproval/></h4></h1>
              <a className="btn btn-dark btn-sm my-1" href={html_url} >
              Profile 
              </a> 
            </div>
        )
    }
}

export default UserItem;
