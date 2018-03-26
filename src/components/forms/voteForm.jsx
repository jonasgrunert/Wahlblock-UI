import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField, reduxForm } from 'redux-form';
import { Button, Control, Column, Columns, Field, Label, Radio } from 'bloomer';
import { connect } from 'react-redux';

const mutation = gql`
  mutation addVote($ballot: String!, $voting: String!) {
    blockchain {
      transactionAdd(ballot: $ballot, voting: $voting){
        ballot
        voting
      }
    }
  }
`;

const Option = props => (
  <Radio name="selection"> {props.option} </Radio>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

const Options = optionsConfig => (
  optionsConfig.map(config => <span><ReduxField name="selection" component={Option} type="radio" option={config} value={Option} /><br /></span>)
);

let VoteForm = props => (
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

VoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
};

VoteForm.defaultProps = {
  state: false,
  options: ['Ja', 'Nein'],
};

VoteForm = reduxForm({ form: 'vote' })(VoteForm);

const VoteFormWrapper = props => (
  <Mutation mutation={mutation}>
    {(addVote, { loading, error }) => (
      <VoteForm
        handleSubmit={(values) => {
          addVote({ variables: { ballot: props.hashkey, voting: values.selection } });
        }}
        state={loading}
        error={error}
      />
    )}
  </Mutation>
);

VoteFormWrapper.propTypes = {
  hashkey: PropTypes.string.isRequired,
};

const VoteFormContainer = connect(state => ({ hashkey: state.hash }), {})(VoteForm);
export default VoteFormContainer;
