import { Hero, HeroBody } from 'bloomer';
import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

import Main from './components/main/main';
import MainMenu from './components/navigation/menu';
import reducer from './reducers/reducers';
import menuLinks from './config/menuLink';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Hero id="outer-container" isFullWidth isFullHeight isColor="primary">
        <MainMenu />
        <HeroBody id="main" isFullWidth isMarginless isPaddingless>
          <Route path="/" exact component={Main} />
        </HeroBody>
      </Hero>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('example'),
);
