import {createAction} from '@reduxjs/toolkit';

export type FILM_REQUESTED = {

    fetchingFilm: boolean;
    filmId: string

}

export const filmRequested = createAction("FilmRequested",
    (filmId) => {
        return {
            payload: {
                fetching: true,
                filmId
            }
        };
    });
