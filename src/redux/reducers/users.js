import { ADD_USER } from "../actionTypes";
import { initialStateUsers } from "../../constants";

const users = (state = initialStateUsers, action) => {
  switch (action.type) {
    case ADD_USER: {
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    }
    default:
      return state;
  }
};

export default users;