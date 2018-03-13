import { Box, Container, Title } from 'bloomer';
import { Pie } from 'react-chartjs-2';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const options = {
  legend: {
    position: 'right',
  },
};

export const Outcome = props => (
  <Container hasTextAlign="Centered">
    <Box>
      <Title hasTextColor="black" isSize={2}>Outcome</Title>
      <Pie data={props.data} options={props.options} />
    </Box>
  </Container>
);

Outcome.propTypes = {
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

Outcome.defaultProps = {
  data,
  options,
};

// const mapStateToProps = state => ({
//   data: {
//     datasets: [{
//       data: state.outcome.data,
//       backgroundColor: state.outcome.dataColor,
//     }],
//     labels: state.outcome.labels,
//   },
//   options: state.options,
// });

// const OutcomeContainer = connect(mapStateToProps, {})(Outcome);
// export default OutcomeContainer;
