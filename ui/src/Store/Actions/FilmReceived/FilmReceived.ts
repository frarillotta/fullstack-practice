import {createAction} from '@reduxjs/toolkit';

export type FILM_RECEIVED = {

    fetchingFilm: boolean;
    filmDetails: any[]

}

export const filmReceived = createAction("FilmReceived",
    (film) => {
        return {
            payload: {
                fetching: false,
                film: film
            }
        };
    });
