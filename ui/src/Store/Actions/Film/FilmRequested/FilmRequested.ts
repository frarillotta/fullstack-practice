import {createAction} from "redux-actions";

export type FILM_REQUESTED = {
    filmTitle: string;
};

export const FILM_REQUESTED = "FilmRequested";

export const FilmRequested = createAction(FILM_REQUESTED,
    (filmTitle: string): FILM_REQUESTED => {

    return {
        filmTitle: filmTitle
    };

});
