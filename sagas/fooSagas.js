import { delay } from 'redux-saga'
import { put, takeEvery, all, fork } from 'redux-saga/effects'

export function* helloSaga(){
    console.log('Hello Saga!!');
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
    console.log('incrementAsync');
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}
  
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* callApi(){
    console.log('CallApi');
}

function* getUser(){
    yield takeEvery('CALL_API', callApi);
}

export default function* fooSaga(){
    yield all([
        fork(helloSaga),
        fork(watchIncrementAsync),
        fork(getUser)
    ]);
}