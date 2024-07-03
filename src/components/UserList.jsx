import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
  }, [dispatch]);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Search by username"
      />
      {filteredUsers.map(user => (
        <div key={user.id} className="p-2 border-b">{user.username}</div>
      ))}
    </div>
  );
};

export default UserList;