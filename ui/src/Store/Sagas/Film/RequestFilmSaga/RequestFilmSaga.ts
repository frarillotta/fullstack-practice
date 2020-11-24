import {call, put, takeLatest, takeEvery} from "redux-saga/effects";
import * as Api from "../../../../API";
import {filmRequested} from "../../../Actions/FilmRequested/FilmRequested";
import {filmReceived} from "../../../Actions/FilmReceived/FilmReceived";

export function* watchRequestFilm() {
    yield takeEvery(filmRequested.type, requestFilmSaga);
}

export function* requestFilmSaga(action) {

    const filmDetails = yield call(Api.OMDBAPI.queryFilm, action.payload.filmId);

    yield put(filmReceived(filmDetails));

}
