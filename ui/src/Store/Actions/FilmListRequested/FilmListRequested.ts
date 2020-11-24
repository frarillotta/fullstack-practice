import {createAction} from '@reduxjs/toolkit';

export type FILM_LIST_REQUESTED = {

    fetching: boolean,
    query: string

}

export const filmListRequested = createAction("FilmListRequested",
    (query) => {
        return {
            payload: {
                fetching: true,
                query
            }
        };
    });
