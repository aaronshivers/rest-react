import React from 'react';
import UsersList from './UsersList';
import { UsersStore } from '../contexts/usersContext';
import NewUser from './NewUser';

const UsersApp = () => (
  <UsersStore>
    <NewUser />
    <UsersList />
  </UsersStore>
);

export default UsersApp;
