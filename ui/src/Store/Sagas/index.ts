import {all} from "redux-saga/effects";
import {watchRequestFilmList} from "./List/RequestFilmListSaga/RequestFilmListSaga";
import {watchRequestFilm} from "./Film/RequestFilmSaga/RequestFilmSaga";

function* rootSaga() {
    yield all([
        watchRequestFilmList(),
        watchRequestFilm()
    ])
}

export default rootSaga
