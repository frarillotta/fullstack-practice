import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./Store"
import App from "./View/App/App";


ReactDOM.render(

    <Provider store={store}>

        <App></App>

    </Provider>,
    document.getElementById("root")

);
