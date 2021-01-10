import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import fetchReducer from '../reducers/fetchReducer';

const UsersContext = createContext();

export const UsersStore = ({ children }) => {
  const {
    state, fetchData, postData, deleteData, patchData
  } = useFetch({ reducer: fetchReducer });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <UsersContext.Provider
      value={{
        state, fetchData, postData, deleteData, patchData
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersStore.propTypes = {
  children: PropTypes.node.isRequired
};

export default UsersContext;
