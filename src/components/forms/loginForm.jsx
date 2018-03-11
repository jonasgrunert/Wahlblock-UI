import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField, reduxForm } from 'redux-form';
import { Button, Columns, Column, Control, Field, Input as BInput, Label } from 'bloomer';

const TextInput = props => (
  <BInput type={props.type} placeholder={props.placeholder} />
);

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};


let LoginForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field>
      <Label>Name</Label>
      <Control>
        <ReduxField name="name" component={TextInput} type="text" placeholder="Max Mustermann" />
      </Control>
    </Field>
    <Field>
      <Label>PIN</Label>
      <Control>
        <ReduxField name="pin" component={TextInput} type="password" placeholder="Your PIN" />
      </Control>
    </Field>
    <Columns isMobile>
      <Column isSize="full">
        <Button type="submit" isColor="primary" isSize="medium" isPulled="right" isOutlined>Login</Button>
      </Column>
    </Columns>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm = reduxForm({ form: 'login' })(LoginForm);
