import {UPDATE_EMAIL, UPDATE_ID, DATA_API} from '../actions/InfoAction';
const initialState = {
  email: '',
  score: 0,
  address: '',
  id: '',
  resData: [],
};
export default function actionForReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.payload.user,
        // [action.payload.key]:action.payload.value
      };
    }
    case UPDATE_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case DATA_API: {
      return {
        ...state,
        resData: action.payload,
      };
    }
    default:
      return state;
  }
}
