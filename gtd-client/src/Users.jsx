import React from 'react';

function Users({users}) {
  return (
    <div>
    <h1>Current Users</h1> <br/>
      {users.map((user) => (
          <div key={user.id} className='contain'>
            <div className="grid-item">
            <p>Username: {user.username} </p>
            <p>e-mail: {user.email} </p>
            <p>password: {user.password_digest} </p>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Users;