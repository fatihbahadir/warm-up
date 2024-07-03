import axios from 'axios';
import { call, put, select, takeEvery, all } from 'redux-saga/effects';

function* getPostAuthor(authorId) {
  const { users } = yield select((state) => state.users);
  const author = users.find(user => user.id === authorId);
  return author;
}

function* fetchPosts() {
  try {
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts`);
    const posts = response.data;

    const data = [];
    for (const post of posts) {
      const author = yield call(getPostAuthor, post.userId);
      data.push({ ...post, author });
    }

    console.log('data', data);

    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE', error });
  }
}

function* postSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts);
}

export default postSaga;