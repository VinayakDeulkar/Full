import { delay } from '@redux-saga/core/effects';
import {put,takeLatest,all} from 'redux-saga/effects';
    function * fetchPosts(){
        yield delay(4000)
      const json=yield fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json(),);
      yield put({
        type:"POSTS_RECEIVED",payload:json,
      })
    }
    function * watcher(){
      yield takeLatest('GET_POSTS',fetchPosts);
    }
   export default function * sagaFunction()
   {
     yield all([
       watcher(),
     ])
   }