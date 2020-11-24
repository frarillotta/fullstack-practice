import {combineReducers, configureStore} from "@reduxjs/toolkit";
import rootReducer from "./Reducers/index";
import rootSaga from "./Sagas";
import initiliazeSagaMiddleware from "redux-saga";

const sagaMiddleware = initiliazeSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer(),
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
