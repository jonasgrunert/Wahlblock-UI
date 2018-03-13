import { Box, Container, Tile, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TileTitle = props => (
  <Title hasTextColor="black" isSize={2} hasTextAlign="left">{props.title}</Title>
);

TileTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const Info = (props) => {
  const { info, question, answers } = props;
  return (
    <Container hasTextAlign="centered">
      <Tile isAncestor>
        <Tile isParent isSize={8}>
          <Tile
            isChild
            render={subprops => (
              <Box {...subprops} hasTextAlign="left">
                <TileTitle title="Information" />
                <p>{info}</p>
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
                <p>{question}</p>
              </Box>
            )}
          />
          <Tile
            isChild
            render={subprops => (
              <Box {...subprops} hasTextAlign="left">
                <TileTitle title="Answers" />
                <p>{answers}</p>
              </Box>
            )}
          />
        </Tile>
      </Tile>
    </Container>
  );
};

Info.propTypes = {
  info: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.string,
};

Info.defaultProps = {
  info: 'No information available. Did you get lost?',
  question: 'No information available. Did you get lost?',
  answers: 'No answers available. Did you get lost?',
};

const mapStateToProps = state => ({
  information: state.information,
  questions: state.questions,
  answers: state.answers,
});

const InfoContainer = connect(mapStateToProps, null)(Info);
export default InfoContainer;
