import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './posts.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: PostsReducer,
});

export default rootReducer;
