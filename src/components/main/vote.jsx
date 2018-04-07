import { Box, Container, Column, Columns, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import VoteFormWrapper from '../forms/voteForm';

class Vote extends React.Component {
  componentWillMount() {
    this.props.redirect();
  }

  componentWillUpdate() {
    this.props.redirect();
  }

  render() {
    return (
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
  }
}

Vote.propTypes = {
  redirect: PropTypes.func.isRequired,
};

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

export default connect(mapStateToProps, null)(connect(null, mapDispatchToProps)(Vote));
