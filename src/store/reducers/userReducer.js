import { types } from "../actions/userActions";
import { userItem } from "../initialValues/userItem";

const initialState = {
  userItem: userItem,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_USER:
      state.user = payload
      return {
        ...state,
      }

    case types.DELETE_USER:
      window.location.href = `${window.location.origin}/login`
      state.user = payload
      return {
        ...state,
      }

    case types.USER_LOGIN:
      return {
        ...state,
        authItem: [...[{ loggedIn: true, user: payload }]]
      }

    case types.USER_LOGOUT:
      return {
        ...state,
        authItem: [{ loggedIn: false, user: { id: 0, userType: 0 } }]
      };

    default:
      return state;
  }
}