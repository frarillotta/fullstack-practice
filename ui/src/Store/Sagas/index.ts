import {all} from "redux-saga/effects";
import {watchRequestFilmList} from "./List/RequestFilmListSaga/RequestFilmListSaga";

function* rootSaga() {
    yield all([
        watchRequestFilmList()
    ])
}

export default rootSaga
