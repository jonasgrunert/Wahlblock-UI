import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField, reduxForm } from 'redux-form';
import { Button, Columns, Column, Control, Field, Input as BInput, Label } from 'bloomer';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const TextInput = props => (
  <BInput
    type={props.type}
    placeholder={props.placeholder}
    disabled={props.state}
  />
);

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.bool,
};

TextInput.defaultProps = {
  state: false,
};

let LoginForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field>
      <Label>Name</Label>
      <Control>
        <ReduxField name="name" component={TextInput} type="text" placeholder="Max Mustermann" state={props.state} />
      </Control>
    </Field>
    <Field>
      <Label>PIN</Label>
      <Control>
        <ReduxField name="pin" component={TextInput} type="password" placeholder="Your PIN" state={props.state} />
      </Control>
    </Field>
    <Columns isMobile>
      <Column isSize="full">
        <Button type="submit" isColor="primary" isSize="medium" isPulled="right" isOutlined isLoading={props.state}>Login</Button>
      </Column>
    </Columns>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.bool,
};

LoginForm.defaultProps = {
  state: false,
};

LoginForm = reduxForm({ form: 'login' })(LoginForm);


const mapStateToProps = state => ({
  state: state.login === 'loggingin' || state.login === 'loggingout',
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => dispatch(push('/btw17/vote')),
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
