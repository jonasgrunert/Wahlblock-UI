import { Box, Container, Column, Columns, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VoteForm from '../forms/voteForm';

export const Vote = props => (
  <Container hasTextAlign="centered">
    <Columns isCentered>
      <Column isSize="1/2">
        <Box>
          <Title isSize={2} hasTextColor="black">Vote now</Title>
          <VoteForm onSubmit={() => false}/>
        </Box>
      </Column>
    </Columns>
  </Container>
);
