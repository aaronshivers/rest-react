import React, { useContext } from 'react';
import UsersContext from '../contexts/usersContext';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const { state: { users, loading } } = useContext(UsersContext);

  const renderUsers = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {users.map(({ id, name, isHungry }) => (
          <UsersListItem
            key={id}
            name={name}
            id={id}
            isHungry={isHungry}
          />
        ))}
      </ul>
    );
  };

  return renderUsers();
};

export default UsersList;
