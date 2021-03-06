import { Box, Container, Icon, Tile, Title } from 'bloomer';
import * as React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

export const TileTitle = props => (
  <Title hasTextColor="black" isSize={2} hasTextAlign="left">
    {props.title}
  </Title>
);

TileTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export class Info extends React.Component {
  componentWillMount() {
    this.props.dispatchInformationGet();
  }

  render() {
    if (this.props.InformationFetch.pending || this.props.InformationFetch.value === undefined) {
      return (
        <Container hasTextAlign="centered">
          <ReactLoading type="spinningBubbles" />
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
                  <p>{this.props.InformationFetch.value.description}</p>
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
                  <p>{this.props.InformationFetch.value.title}</p>
                </Box>
              )}
            />
            <Tile
              isChild
              render={subprops => (
                <Box {...subprops} hasTextAlign="left">
                  <TileTitle title="Answers" />
                  <p>
                    {this.props.InformationFetch.value.selectionOptions.map(element => (
                      <p>{element.option}</p>
                    ))}
                  </p>
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
  InformationFetch: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    rejected: PropTypes.bool.isRequired,
    fulfilled: PropTypes.bool.isRequired,
    value: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      beginDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      selectionOptions: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.number.isRequired,
        option: PropTypes.string.isRequired,
      })),
    }),
  }),
};

Info.defaultProps = {
  InformationFetch: {
    pending: false,
    rejected: false,
    fulfilled: true,
    value: {
      id: 0,
      title: 'Example',
      description: 'This is a placeholder',
      beginDate: '',
      endDate: '',
      selectionOptions: [
        {
          position: 1,
          option: 'None',
        },
      ],
    },
  },
};
