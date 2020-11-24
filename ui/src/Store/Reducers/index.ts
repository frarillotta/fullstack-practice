import {combineReducers} from "redux";
import List from "./List/List";

const rootReducer = () => combineReducers({

    list: List

})

export default rootReducer;
