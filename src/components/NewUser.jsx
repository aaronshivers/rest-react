import React, { useContext } from 'react';
import UserForm from './UserForm';
import UsersContext from '../contexts/usersContext';

const NewUser = () => {
  const { postData } = useContext(UsersContext);

  const submitData = ({ name, isHungry }) => {
    postData({ name, isHungry });
  };

  return (
    <UserForm
      label="New User"
      submitData={submitData}
    />
  );
};

export default NewUser;
