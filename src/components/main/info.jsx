import { Box, Container, Icon, Tile, Title } from 'bloomer';
import * as React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import connect from 'react-redux-fetch';

const TileTitle = props => (
  <Title hasTextColor="black" isSize={2} hasTextAlign="left">{props.title}</Title>
);

TileTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

class Info extends React.Component {
  componentWillMount() {
    this.props.dispatchInformationGet();
  }

  render() {
    if (this.props.InformationFetch.pending) {
      return (
        <Container hasTextAlign="centered">
          <ReactLoading type="SpinningBubbles" />
        </Container>
      );
    }
    if (this.props.InformationFetch.rejected) {
      return (
        <Container hasTextAlign="centered">
          <Icon isSize="large" className="fa fa-exclamation-triangle fa-3x" />
        </Container>
      );
    }
    return (
      <Container hasTextAlign="centered">
        <Tile isAncestor>
          <Tile isParent isSize={8}>
            <Tile
              isChild
              render={subprops => (
                <Box {...subprops} hasTextAlign="left">
                  <TileTitle title="Information" />
                  <p>{JSON.stringify(this.props.InformationFetch.value)}</p>
                </Box>
              )}
            />
          </Tile>
          <Tile isParent isVertical isSize={4}>
            <Tile
              isChild
              render={subprops => (
                <Box {...subprops} hasTextAlign="left">
                  <TileTitle title="Question" />
                  <p>Title</p>
                </Box>
              )}
            />
            <Tile
              isChild
              render={subprops => (
                <Box {...subprops} hasTextAlign="left">
                  <TileTitle title="Answers" />
                  <p>Answers</p>
                </Box>
              )}
            />
          </Tile>
        </Tile>
      </Container>
    );
  }
}

Info.propTypes = {
  dispatchInformationGet: PropTypes.func.isRequired,
  InformationFetch: PropTypes.object.isRequired,
};

// Info.defaultProps = {
//   InformationFetch:
// };

const InfoContainer = connect([{
  resource: 'Information',
  method: 'get',
  request: {
    method: 'get',
    url: 'http://localhost:8080/api/v1/election/1',
  },
}])(Info);

export default InfoContainer;
