import { useCallback, useReducer } from 'react';
import {
  deleteSuccess,
  fetchFailure,
  fetchSuccess,
  patchSuccess,
  postSuccess
} from '../actions/fetchActions';
import fetchReducer from '../reducers/fetchReducer';

const useFetch = ({ reducer = fetchReducer } = {}) => {
  const INITIAL_STATE = { loading: true, error: '', users: [] };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const url = 'http://localhost:3500/users/';

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();

      fetchSuccess(users)(dispatch);
    } catch (error) {
      fetchFailure(error.message)(dispatch);
    }
  }, []);

  const postData = async ({ name, isHungry }) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name,
          isHungry
        }),
        headers: {
          'Content-type': 'application/json'
        }
      });

      const user = await response.json();

      postSuccess(user)(dispatch);
    } catch (error) {
      fetchFailure(error.message)(dispatch);
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(url + id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });

      deleteSuccess(id)(dispatch);
    } catch (error) {
      fetchFailure(error.message)(dispatch);
    }
  };

  const patchData = async ({ id, name, isHungry }) => {
    try {
      await fetch(url + id, {
        method: 'PATCH',
        body: JSON.stringify({
          name,
          isHungry
        }),
        headers: {
          'Content-type': 'application/json'
        }
      });

      patchSuccess({ id, name, isHungry })(dispatch);
    } catch (error) {
      fetchFailure(error.message)(dispatch);
    }
  };

  return { state, fetchData, postData, deleteData, patchData };
};

export default useFetch;
