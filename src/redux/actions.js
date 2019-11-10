import { ADD_USER, SET_SETTINGS } from "./actionTypes";

let nextUserId = 0;

export const addUser = user => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserId,
    ...user
  }
});

export const setSettings = settings => ({
  type: SET_SETTINGS,
  payload: {
    ...settings
  }
});