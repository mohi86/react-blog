import _ from 'lodash';

import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      const key = Object.keys(action.payload)[0];
      const post = action.payload;
      
      return {
        ...state,
        [key]: action.payload[key]
      }
    case DELETE_POST:
      return _.omit(state, action.payload); 
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}