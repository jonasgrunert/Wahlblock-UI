import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField, reduxForm } from 'redux-form';
import { Button, Control, Column, Columns, Field, Label, Radio } from 'bloomer';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const Option = props => (
  <Radio name="selection"> {props.option} </Radio>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

const Options = optionsConfig => (
  optionsConfig.map(config => <span><ReduxField name="selection" component={Option} type="radio" option={config} /><br /></span>)
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

const mapStateToProps = state => ({
  state: state.login === 'loggingin' || state.login === 'loggingout',
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => dispatch(push('/btw17')),
});

const VoteFormContainer = connect(mapStateToProps, mapDispatchToProps)(VoteForm);
export default VoteFormContainer;
