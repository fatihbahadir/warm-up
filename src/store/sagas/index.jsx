import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import postSaga from './postSaga';
import userPostSaga from './userPostSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(userPostSaga)]);
}