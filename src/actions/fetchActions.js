export const actionTypes = {
  FETCH_FAILURE: 'FETCH_FAILURE',
  GET_SUCCESS: 'GET_SUCCESS',
  POST_SUCCESS: 'POST_SUCCESS',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  PATCH_SUCCESS: 'PATCH_SUCCESS'
};

export const fetchFailure = (error) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_FAILURE, error });
};
export const fetchSuccess = (users) => (dispatch) => {
  dispatch({ type: actionTypes.GET_SUCCESS, users });
};
export const postSuccess = (user) => (dispatch) => {
  dispatch({ type: actionTypes.POST_SUCCESS, user });
};
export const deleteSuccess = (id) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_SUCCESS, id });
};
export const patchSuccess = ({ id, name, isHungry }) => (dispatch) => {
  dispatch({ type: actionTypes.PATCH_SUCCESS, id, name, isHungry });
};
