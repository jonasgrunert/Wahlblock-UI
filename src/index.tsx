import { Container, Hero, HeroBody } from "bloomer";
import createBrowserHistory from "history/createBrowserHistory";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter, push, routerMiddleware, RouterState } from "react-router-redux";
import * as Redux from "redux";

import { Main } from "./components/main/main";
import SideMenu from "./components/navigation/menu";
import { reducer } from "./reducers/reducers";

export interface IStore {
    burgerMenu: { isOpen: boolean};
    router: RouterState;
}


const history = createBrowserHistory();
const middleware = routerMiddleware(history);
export const store = Redux.createStore(reducer, Redux.applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Hero id="outer-container" isFullWidth isFullHeight isColor="primary">
                <SideMenu />
                <HeroBody id="main" isFullWidth isMarginless isPaddingless>
                    <Route path="/:url" component={Main} />
                </HeroBody>
            </Hero>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("example"),
);
