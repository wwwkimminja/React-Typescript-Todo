import React ,{useState} from 'react';
import CreateUser from './users/CreateUser';
import UserList from './users/UserList';


function App() {

const [users,setUsers]=useState([
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com'
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com'
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com'
  }
])


  return (
    <div className="App">
      <CreateUser/>
      {/*Error
      Type '{ users: { id: number; username: string; email: string; }[]; }' is not assignable to type 'IntrinsicAttributes & UserListProps'.
  Property 'users' does not exist on type 'IntrinsicAttributes & UserListProps'. 
   */}
     <UserList users={users}/>

    </div>
  );
}

export default App;
