import axios from 'axios';
import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchPosts(action) {
  try {
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts`, {
      params: { userId: action.payload }
    });
    const data = response.data;
    yield put({ type: 'FETCH_USER_POSTS_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_USER_POSTS_FAILURE', error: error.message });
  }
}

function* addPost(action) {
  try {
    const response = yield call(axios.post, `https://jsonplaceholder.typicode.com/posts`, action.payload, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = response.data;
    yield put({ type: 'ADD_USER_POST_SUCCESS', payload: data });
    toast.success('Post added succesfully!')
  } catch (error) {
    yield put({ type: 'ADD_USER_POST_FAILURE', error: error.message });
    toast.error("An error occured please try again")
  }
}

function* deletePost(action) {
  try {
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${action.payload}`);
    yield put({ type: 'DELETE_USER_POST_SUCCESS', payload: action.payload });
    toast.success('Post deleted succesfully.')
  } catch (error) {
    yield put({ type: 'DELETE_USER_POST_FAILURE', error: error.message });
  }
}

function* updatePost(action) {
  try {
    const response = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${action.payload.postId}`, action.payload, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = response.data;
    yield put({ type: 'UPDATE_USER_POST_SUCCESS', payload: data });
    toast.success('Post updated succesfully.')
  } catch (error) {
    yield put({ type: 'UPDATE_USER_POST_FAILURE', error: error.message });
  }
}

function* userPostSaga() {
  yield takeEvery('FETCH_USER_POSTS_REQUEST', fetchPosts);
  yield takeEvery('ADD_USER_POST_REQUEST', addPost);
  yield takeEvery('DELETE_USER_POST_REQUEST', deletePost);
  yield takeEvery('UPDATE_USER_POST_REQUEST', updatePost);
}

export default userPostSaga;