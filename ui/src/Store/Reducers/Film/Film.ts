import {PayloadAction, createReducer} from "@reduxjs/toolkit";
import {filmReceived} from "../../Actions/FilmReceived/FilmReceived";
import {filmRequested} from "../../Actions/FilmRequested/FilmRequested";

export interface FilmState {

    filmDetails: any[],
    fetching: boolean

}

const initialState: FilmState = {

    filmDetails: [],
    fetching: false

}

const Film = createReducer(initialState, (reducer)=>{

    reducer.addCase(filmReceived, receiveFilm);
    reducer.addCase(filmRequested, requestFilm);

});

function receiveFilm(state, action) {

    return {
        ...state,
        filmDetails: action.payload.film,
        fetching: action.payload.fetching
    }

}

function requestFilm(state, action) {

    return {
        ...state,
        fetching: action.payload.fetching
    }

}

export default Film
