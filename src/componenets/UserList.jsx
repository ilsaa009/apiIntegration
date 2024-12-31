import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get('https://dummyjson.com/users')
        .then((response) => {
            setUsers(response.data.users);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data: ' , error);
            setLoading(false);
        })
    }, [])

    if(loading) return <p>Loading.....</p>

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) =>(
            <li key={user.id}>
                {user.firstName}  {user.lastName}- {user.email}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
