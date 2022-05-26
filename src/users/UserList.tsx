import React from 'react'
import User from './User'

type UserListProps={
  users:{
    id:number;
    username:string;
    email:string;
  }[]
}

function UserList( {users} :UserListProps) {
  return (
    <div>
        {users.map(user=>(
        <User key={user.id} {...user}/>
        ))}
    </div>
  )
}

export default UserList