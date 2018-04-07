import { Box, Container, Column, Columns, Title } from 'bloomer';
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import VoteFormWrapper, { VoteForm } from '../forms/voteForm';

export const Vote = props => (
  <Container hasTextAlign="centered">
    <Columns isCentered>
      <Column isSize="1/2">
        <Box>
          <Title isSize={2} hasTextColor="black">Vote now</Title>
          <VoteFormWrapper />
        </Box>
      </Column>
    </Columns>
  </Container>
);

const mapStateToProps = state => ({
  login: state.repository.Login.fulfilled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  redirect: () => {
    if (!ownProps.login) {
      dispatch(push('/btw17/login'));
    }
  },
});

export default connect(mapStateToProps, {})(connect({}, mapDispatchToProps)(Vote));
