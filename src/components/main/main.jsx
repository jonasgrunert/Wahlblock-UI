import { Box, Column, Columns, Container, Notification, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import LoginFormContainer from '../forms/loginForm';

class Main extends React.Component {
  componentDidMount() {
    this.props.redirect();
  }

  componentDidUpdate() {
    this.props.redirect();
  }

  render() {
    return (
      <Container hasTextAlign="centered">
        <Columns isCentered>
          <Column isSize="1/2">
            <Box hasTextAlign="left">
              <Title hasTextColor="primary">Login</Title>
              <Notification isColor="danger">
                Once logged in on one device you have to complete the vote process.
              </Notification>
              <LoginFormContainer />
            </Box>
          </Column>
        </Columns>
      </Container>
    );
  }
}

Main.propTypes = {
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  if (state.repository.Login === undefined) {
    return {
      fulfilled: false,
    };
  }
  return {
    login: state.repository.Login.fulfilled,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  redirect: () => {
    if (ownProps.login) {
      dispatch(push('/btw17/vote'));
    }
  },
});

export default connect(mapStateToProps, null)(connect(null, mapDispatchToProps)(Main));
