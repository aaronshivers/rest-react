import { actionTypes } from '../actions/fetchActions';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_SUCCESS: {
      return { loading: false, error: '', users: action.users };
    }
    case actionTypes.FETCH_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    case actionTypes.POST_SUCCESS: {
      return { loading: false, error: '', users: [...state.users, action.user] };
    }
    case actionTypes.DELETE_SUCCESS: {
      return {
        loading: false,
        error: '',
        users: state.users.filter((user) => user.id !== action.id)
      };
    }
    case actionTypes.PATCH_SUCCESS: {
      return {
        loading: false,
        error: '',
        users: state.users.map((user) => {
          return user.id === action.id ? {
            id: user.id,
            name: action.name,
            isHungry: action.isHungry
          } : user;
        })
      };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
};

export default fetchReducer;
