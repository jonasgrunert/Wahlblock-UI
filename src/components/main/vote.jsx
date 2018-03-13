import { Box, Container, Tile, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Vote = props => (
  <Container hasTextAlign="centered">
    <Box>
      <Title isSize={2} hasTextColor="black">Vote now</Title>
      <p>Here comes the question</p>
    </Box>
  </Container>
);
