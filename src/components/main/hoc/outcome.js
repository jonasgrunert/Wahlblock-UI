import { graphql } from 'react-apollo';

import { outcome } from '../../../queries/query.gql';
import { GraphqlContainer } from '../base/Outcome';

// wrapping with graphql query
export const OutcomeWrapper = graphql(outcome)(GraphqlContainer);
