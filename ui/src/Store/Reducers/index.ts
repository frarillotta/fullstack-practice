import {combineReducers} from "redux";
import { History } from "history";
import {RouterState, connectRouter} from "connected-react-router";
import Search, {SearchState} from "./Search/Search"

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    search: Search
});

export interface State {
    router?: RouterState;
    search: SearchState

}

export default rootReducer;
