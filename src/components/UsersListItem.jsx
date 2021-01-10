import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from '../contexts/usersContext';
import UserForm from './UserForm';

const UsersListItem = ({ id, name, isHungry }) => {
  const [editing, setEditing] = useState(false);
  const { deleteData, patchData } = useContext(UsersContext);

  const onEditClick = () => {
    setEditing(!editing);
  };

  const onDeleteClick = () => {
    deleteData(id);
  };

  const submitData = ({ name, isHungry }) => {
    patchData({ id, name, isHungry });
    setEditing(false);
  };

  return (
    <>
      <hr />
      <li>
        <div>
          <div>Name: {name}</div>
          <div>isHungry: {isHungry.toString()}</div>
        </div>
        <div>
          <button
            type="button"
            onClick={onEditClick}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        </div>
        {
          editing && <UserForm
            label="Edit User"
            value={name}
            checked={isHungry}
            submitData={submitData}
          />
        }
      </li>
    </>
  );
};

UsersListItem.defaultProps = {
  name: ''
};

UsersListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  isHungry: PropTypes.bool.isRequired
};

export default UsersListItem;
