import { Box, Container, Column, Columns, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';

import VoteFormWrapper from '../../forms/hoc/voteForm';

// STateful compoent for redirecting upon login
export class Vote extends React.Component {
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
              <Title isSize={2} hasTextColor="black">
                Vote now
              </Title>
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
