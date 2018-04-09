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
import MainWrapper from './components/main/main';
import InfoContainer from './components/main/info';
import { OutcomeWrapper } from './components/main/outcome';
import { StatsContainer } from './components/main/stats';
import VoteWrapper from './components/main/vote';
import MainMenu from './components/navigation/menu';
import reducer from './reducers/reducers';
import menuLinks from './config/menuLink';
import { graphQLServer } from './config/serviceLink';

// Setup for Redux and Rouer
const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, applyMiddleware(middleware, fetchMiddleware));

// Setup for Apolloclient
const client = new ApolloClient({
  uri: graphQLServer,
});

// Initial Render
ReactDOM.render(
  // Redux Provider
  <Provider store={store}>
    { /* Apollo Provider */ }
    <ApolloProvider client={client}>
      <ConnectedRouter history={history}>
        <Hero id="outer-container" isFullWidth isFullHeight isColor="primary">
          { /* Menu */ }
          <MainMenu routesConfig={menuLinks} title="Wahlblock" />
          { /* Router */ }
          <HeroBody id="main" isFullWidth isMarginless isPaddingless>
            <Route path="/:election/" exact component={InfoContainer} />
            <Route path="/:election/login" exact component={MainWrapper} />
            <Route path="/:election/vote" exact component={VoteWrapper} />
            <Route path="/:election/outcome" exact component={OutcomeWrapper} />
            <Route path="/:election/stats" exact component={StatsContainer} />
          </HeroBody>
        </Hero>
      </ConnectedRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('example'),
);
