import 'whatwg-fetch';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Hero, HeroBody } from 'bloomer';
import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { middleware as fetchMiddleware } from 'react-redux-fetch';
import { applyMiddleware, createStore } from 'redux';

import './config/wahlblockStyles.scss';
import Main from './components/main/main';
import InfoContainer from './components/main/info';
import { OutcomeWrapper } from './components/main/outcome';
import { Stats } from './components/main/stats';
import { VoteForm } from './components/main/vote';
import MainMenu from './components/navigation/menu';
import reducer from './reducers/reducers';
import menuLinks from './config/menuLink';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware, fetchMiddleware));

const client = new ApolloClient({
  uri: 'http://192.168.99.100:3000/graphql',
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ConnectedRouter history={history}>
        <Hero id="outer-container" isFullWidth isFullHeight isColor="primary">
          <MainMenu routesConfig={menuLinks} title="Wahlblock" />
          <HeroBody id="main" isFullWidth isMarginless isPaddingless>
            <Route path="/:election" exact component={InfoContainer} />
            <Route path="/:election/login" exact component={Main} />
            <Route path="/:election/vote" exact component={VoteForm} />
            <Route path="/:election/outcome" exact component={OutcomeWrapper} />
            <Route path="/:election/stats" exact component={Stats} />
          </HeroBody>
        </Hero>
      </ConnectedRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('example'),
);
