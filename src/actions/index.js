import axios from 'axios';
import fire from '../services/firebase';

export const FETCH_POSTS = 'Fetch Posts';
export const FETCH_POST = 'Fetch Post';
export const CREATE_POST = 'Create Post';
export const DELETE_POST = 'Delete Post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=mohikhalili86';
const Posts = fire.database().ref('posts');

export function fetchPostsAction() {
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return dispatch => {
    Posts.on('value', snapshot => {
      
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchPostAction(id) {
  //const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return dispatch => {
    fire.database().ref(`/posts/${id}`).on('value', snap => {
      const key = snap.key;
      const post = snap.val();
      
      dispatch({
        type: FETCH_POST, payload: {[key]: post}
      })
    })
  }
}

export function deletePostAction(id, callback = () => {}) {
  // const request = axios
  //   .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  //   .then(() => callback());
  return dispatch => Posts.child(id).remove().then(() => {
    dispatch({type: DELETE_POST, payload: id});
    callback();
  });
}

export function createPostAction(values, callback) {
  // const request = axios
  //   .post(`${ROOT_URL}/posts${API_KEY}`, values)
  //   .then(() => callback())

  return dispatch => Posts.push(values).then(() => callback());
}