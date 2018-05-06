import { graphql } from 'react-apollo';

import { stats } from '../../../queries/query.gql';
import { mine } from '../../../queries/mutation.gql';
import { MineContainer, GraphqlContainer } from '../base/Stats';

// wrapping components with queries
export const StatsWrapper = graphql(stats)(GraphqlContainer);
export const MineWrapper = graphql(mine)(MineContainer);
