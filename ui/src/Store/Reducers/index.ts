import {combineReducers} from "redux";
import List from "./List/List";
import Film from "./Film/Film";

const rootReducer = () => combineReducers({

    list: List,
    film: Film

})

export default rootReducer;
