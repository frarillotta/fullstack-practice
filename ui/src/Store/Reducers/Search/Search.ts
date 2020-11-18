import {handleActions, Action} from "redux-actions";
import {FILM_INPUT} from "../../Actions/Search/SearchFilm/SearchFilm"

export interface SearchState {

    filmQuery: string;

}

const Search = handleActions({

    [FILM_INPUT]: filmRequested

})

function filmRequested(state: SearchState, action: Action<FILM_INPUT>) {

    return {
            ...state,
            ...action.payload
        }


}

export default Search
