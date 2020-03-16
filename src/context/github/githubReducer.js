import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  CLEAR_USERS
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
