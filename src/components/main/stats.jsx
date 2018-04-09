import { Box, Button, Column, Columns, Container, Title } from 'bloomer';
import { Bar } from 'react-chartjs-2';
import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ReactLoading from 'react-loading';

import { stats } from '../../queries/query.gql';
import { mine } from '../../queries/mutation.gql';

// default data values
const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: ['hsl(348, 100%, 61%)', 'hsl(204, 86%, 53%)', 'hsl(48, 100%, 67%)'],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue',
  ],
};

// default option
const options = {
  legend: {
    display: false,
  },
};

// Parent component with box
const Stats = props => (
  <Columns isCentered>
    <Column isSize="3/4">
      <Box>
        <Title hasTextColor="black" isSize={2}>
          Stats for Nerds
          <MineWrapper />
        </Title>
        <Bar data={props.data} options={props.options} />
      </Box>
    </Column>
  </Columns>
);

Stats.propTypes = {
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf({
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
      backgroundColor: PropTypes.arrayOf(PropTypes.string),
      borderColor: PropTypes.arrayOf(PropTypes.string),
      borderWidth: PropTypes.arrayOf(PropTypes.number),
      hoverbackgroundColor: PropTypes.arrayOf(PropTypes.string),
      hoverBorderColor: PropTypes.arrayOf(PropTypes.string),
      hoverBorderWidth: PropTypes.arrayOf(PropTypes.number),
    }),
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  options: PropTypes.object,
};

Stats.defaultProps = {
  data,
  options,
};

// Component for data visualization
const GraphqlContainer = (props) => {
  if (props.loading || props.data.blockchain === undefined) return <ReactLoading type="SpinningBubbles" />;
  if (props.error !== undefined || props.data.blockchain.chain.length === 0) return <Icon isSize="large" className="fa fa-exclamation-triangle fa-3x" />;
  return (
    <Stats
      data={{
        datasets: [{
          data: [props.data.blockchain.chain.length, props.data.blockchain.pendingTransactions.length],
          backgroundColor: ['hsl(171, 100%, 41%)', 'hsl(204, 86%, 53%)'],
        }],
        labels: ['Chainlength', 'Pending Transactions'],
      }}
    />
  );
};

// Mining button
const MineContainer = props => (
  <Button isColor="info" isSize="small" isPulled="right" onClick={props.mutate}>Mine</Button>
);

// wrapping components with queries
export const StatsWrapper = graphql(stats)(GraphqlContainer);
export const MineWrapper = graphql(mine)(MineContainer);

// wrapping in a container to center box
export const StatsContainer = props => (
  <Container hasTextAlign="Centered">
    <StatsWrapper />
  </Container>
);
