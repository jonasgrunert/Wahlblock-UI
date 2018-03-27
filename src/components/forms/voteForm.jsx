import { graphql } from 'react-apollo';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField, reduxForm } from 'redux-form';
import { Button, Container, Control, Column, Columns, Field, Label, Radio } from 'bloomer';
import { connect } from 'react-redux';
import { addVote } from '../../queries/mutation.gql';

const Option = props => (
  <Radio name="selection"> {props.option} </Radio>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

const Options = optionsConfig => (
  optionsConfig.map(config => <span><ReduxField name="selection" component={Option} type="radio" option={config} value={Option} /><br /></span>)
);

const Vote = props => (
  <form onSubmit={props.handleSubmit}>
    <Field>
      <Label hasTextAlign="left">Your Selection</Label>
      <Control>
        { Options(props.options) }
      </Control>
    </Field>
    <Columns isMobile>
      <Column isSize="full">
        <Button type="submit" isColor="primary" isSize="medium" isPulled="right" isLoading={props.state}>Vote</Button>
      </Column>
    </Columns>
  </form>
);

Vote.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
};

Vote.defaultProps = {
  state: false,
  options: ['Ja', 'Nein'],
};

export const VoteForm = reduxForm({ form: 'vote' })(Vote);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    ownProps.mutate({
      ballot: ownProps.hashkey,
      voting: ownProps.vote,
    });
  },
});

export const VoteFormContainer = connect({}, mapDispatchToProps)(VoteForm);

const VoteFormGraphQL = graphql(addVote)(VoteFormContainer);

const mapStateToProps = state => ({
  hashkey: state.repository.Login.value.hash,
  vote: state.form.vote.values.selection,
});

const VoteFormWrapper = connect(mapStateToProps, {})(VoteFormGraphQL);
export default VoteFormWrapper;
