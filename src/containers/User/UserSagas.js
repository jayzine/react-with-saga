import { takeLatest, put } from 'redux-saga/effects';
import { COUNTER_ACTION, USER_ACTION } from '../../constants/actions/Users';
import { AddUserAction, AddUserActionSuccess } from './actions';

function* addUserSagas({ payload }) {
    try {
        const { count } = payload;
        yield put(AddUserActionSuccess(count));
    } catch (error) {
        console.log('error')
    }
}

export default function* addUserSagasSync() {
    yield takeLatest(COUNTER_ACTION.COUNTER_PENDING, addUserSagas)
}