import {createAction} from "redux-actions";

export type FILM_INPUT = {
    searchQuery: string;
};

export const FILM_INPUT = "FilmInput";

export const queryFilm = createAction(FILM_INPUT,
    (containerId: string, containerName: string): FILM_INPUT => {

        return {

            searchQuery: FILM_INPUT

        };

    });
