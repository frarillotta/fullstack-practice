import {createBrowserHistory, History} from "history";
import {createStore} from "redux";
import rootReducer from "./Reducers";

export const history: History = createBrowserHistory();

export const store = createStore(
    rootReducer(history),
);
