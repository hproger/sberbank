import { SET_SETTINGS } from "../actionTypes";
import { initialStateSettings } from "../../constants";


const settings = (state = initialStateSettings, action) => {
  switch (action.type) {
    case SET_SETTINGS: {
      return [
        ...action.payload
      ];
    }
    default:
      return state;
  }
};

export default settings;
