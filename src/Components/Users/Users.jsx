import React, { Component } from 'react'
import UserItem from './UserItem'

 class Users extends Component {
    //  state={
    //      users:[
    //          {
    //         login: "mojombo",
    //         id: '1',
    //         html_url: "https://github.com/mojombo",
    //         avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //      },
    //      {
    //         login: "defunkt",
    //         id: '2',
    //         html_url: "https://github.com/defunkt",
    //         avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    //      },
    //      {
    //         login: "pjhyett",
    //         id: '3',
    //         html_url: "https://github.com/pjhyett",
    //         avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //      },
    //     ]
    // }
    render() {
        const userStyle={
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '4rem', 
            marginTop: '50px'
        }
        // console.log(this.state.users)
        return (
            <div style={userStyle}>
                 
            {this.props.users.map((user) =>{
                return( 
                     <UserItem key={user.id}
                      users={user}/>
                )
            })}    
            </div>
        )
    }
}


export default Users
