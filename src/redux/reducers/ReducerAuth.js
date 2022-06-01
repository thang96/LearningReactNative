import {UPDATE_AUTH} from '../actions/auth';
const initialState = {
  isLogin: false,
};
export default function authReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_AUTH: {
      return {
        ...state,
        isLogin: action.payload,
        // [action.payload.key]:action.payload.value
      };
    }

    default:
      return state;
  }
}
