import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import userPostReducer from './userPostReducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  userPosts: userPostReducer
});

export default rootReducer;