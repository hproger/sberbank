import { ADD_USER } from "../actionTypes";

export default function(state, action) {
  switch (action.type) {
    case ADD_USER: {
      return {};
    }
    default:
      return state;
  }
}
