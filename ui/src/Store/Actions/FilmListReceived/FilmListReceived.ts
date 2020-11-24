import {createAction} from '@reduxjs/toolkit';

export type FILM_LIST_RECEIVED = {

    fetching: boolean;
    films: any[]

}

export const filmListReceived = createAction("FilmListReceived",
    (filmList) => {
        return {
            payload: {
                fetching: false,
                films: filmList
            }
        };
    });
