import {call, put, takeLatest, takeEvery} from "redux-saga/effects";
import * as Api from "../../../../API";
import {filmListRequested} from "../../../Actions/FilmListRequested/FilmListRequested"
import {filmListReceived} from "../../../Actions/FilmListReceived/FilmListReceived";

export function* watchRequestFilmList() {
    yield takeEvery(filmListRequested.type, requestFilmListSaga);
}

export function* requestFilmListSaga(action) {

    const filmList = yield call(Api.OMDBAPI.searchFilm, action.payload.query);

    yield put(filmListReceived(filmList));

}
