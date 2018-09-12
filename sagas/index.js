import { all, fork } from 'redux-saga/effects'

import fooSaga from './fooSagas';

export default function* rootSaga(){
    yield all([
        fork(fooSaga)
    ]);
};
