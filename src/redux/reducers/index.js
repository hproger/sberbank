import { combineReducers } from "redux";
import users from './users';
import settings from './settings';

export default combineReducers({ users, settings });