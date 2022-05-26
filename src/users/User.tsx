import React from 'react'

type UserProps={
    id:string;
    username:string;
    email:string;
}

function User({id,username,email}:UserProps) {
  return (
   <>
   <div>{id}</div>
   <div>{username}</div>
   <div>{email}</div>
   </>

  )
}

export default User