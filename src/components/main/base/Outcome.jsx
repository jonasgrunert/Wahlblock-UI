import { Box, Column, Columns, Container, Icon, Title } from 'bloomer';
import { Pie } from 'react-chartjs-2';
import * as React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const randomColor = require('randomcolor');

// default values
const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ['hsl(348, 100%, 61%)', 'hsl(204, 86%, 53%)', 'hsl(48, 100%, 67%)'],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ['Red', 'Yellow', 'Blue'],
};

const options = {
  legend: {
    position: 'right',
  },
};

// container for graph
export const Outcome = props => (
  <Columns isCentered>
    <Column isSize="3/4">
      <Box>
        <Title hasTextColor="black" isSize={2}>
          Outcome
        </Title>
        <Pie data={props.data} options={props.options} />
      </Box>
    </Column>
  </Columns>
);

Outcome.propTypes = {
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
      backgroundColor: PropTypes.arrayOf(PropTypes.string),
      borderColor: PropTypes.arrayOf(PropTypes.string),
      borderWidth: PropTypes.arrayOf(PropTypes.number),
      hoverbackgroundColor: PropTypes.arrayOf(PropTypes.string),
      hoverBorderColor: PropTypes.arrayOf(PropTypes.string),
      hoverBorderWidth: PropTypes.arrayOf(PropTypes.number),
    })),
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  options: PropTypes.object,
};

Outcome.defaultProps = {
  data,
  options,
};

// component for visualizing graphql data
export const GraphqlContainer = (props) => {
  if (props.loading || props.data.blockchain === undefined) {
    return <ReactLoading type="spinningBubbles" />;
  }
  if (props.error !== undefined || props.data.blockchain.count.length === 0) {
    return <Icon isSize="large" className="fa fa-exclamation-triangle fa-3x" />;
  }
  const colors = randomColor({
    count: props.data.blockchain.count.length,
    format: 'hsl',
  });
  return (
    <Container hasTextAlign="centered">
      <Outcome
        data={{
          datasets: [
            {
              data: props.data.blockchain.count,
              backgroundColor: colors,
            },
          ],
          labels: props.data.blockchain.possibilities,
        }}
      />
    </Container>
  );
};
