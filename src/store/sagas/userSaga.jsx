import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    const data = yield response.data;
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_USERS_FAILURE', error });
  }
}

function* userSaga() {
  yield takeEvery('FETCH_USERS_REQUEST', fetchUsers);
}

export default userSaga;