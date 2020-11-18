import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store, history} from "./Store";
import {App} from "./Views/App/App";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline/>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
