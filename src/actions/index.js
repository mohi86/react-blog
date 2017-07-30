import axios from 'axios';

export const FETCH_POSTS = 'Fetch Posts';
export const FETCH_POST = 'Fetch Post';
export const CREATE_POST = 'Create Post';
export const DELETE_POST = 'Delete Post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=mohikhalili86';

export function fetchPostsAction() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPostAction(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePostAction(id, callback = () => {}) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}

export function createPostAction(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    paylod: request
  }
}