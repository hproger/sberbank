import { SET_SETTINGS } from "../actionTypes";

export default function(state, action) {
  switch (action.type) {
    case SET_SETTINGS: {
      return {};
    }
    default:
      return state;
  }
}
