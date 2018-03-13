import { Hero, HeroBody } from 'bloomer';
import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

import './config/wahlblockStyles.scss';
import Main from './components/main/main';
import InfoContainer from './components/main/info';
import { Outcome } from './components/main/outcome';
import { Stats } from './components/main/stats';
import { Vote } from './components/main/vote';
import MainMenu from './components/navigation/menu';
import reducer from './reducers/reducers';
import menuLinks from './config/menuLink';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Hero id="outer-container" isFullWidth isFullHeight isColor="primary">
        <MainMenu routesConfig={menuLinks} title="Wahlblock" />
        <HeroBody id="main" isFullWidth isMarginless isPaddingless>
          <Route path="/:election" exact component={InfoContainer} />
          <Route path="/:election/login" exact component={Main} />
          <Route path="/:election/vote" exact component={Vote} />
          <Route path="/:election/outcome" exact component={Outcome} />
          <Route path="/:election/stats" exact component={Stats} />
        </HeroBody>
      </Hero>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('example'),
);
