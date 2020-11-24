import {PayloadAction, createReducer} from "@reduxjs/toolkit";
import {filmListReceived} from "../../Actions/FilmListReceived/FilmListReceived";
import {filmListRequested} from "../../Actions/FilmListRequested/FilmListRequested";

export interface ListState {

    films: any[],
    fetching: boolean

}

const initialState: ListState = {

    films: [],
    fetching: false

}

const List = createReducer(initialState, (reducer)=>{

    reducer.addCase(filmListReceived, receiveFilmList);
    reducer.addCase(filmListRequested, requestFilmList);

});

function receiveFilmList(state, action) {

    return {
        ...state,
        films: action.payload.films,
        fetching: action.payload.fetching

    }

}

function requestFilmList(state, action) {

    return {
        ...state,
        fetching: action.payload.fetching
    }

}

export default List
