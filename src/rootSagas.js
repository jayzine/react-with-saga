import { all } from 'redux-saga/effects';
import addUserSagasSync from "./containers/User/UserSagas";

export default function* rootSaga() {
    yield all([
        //all sagas file nameshould be here
        addUserSagasSync()
    ])
}