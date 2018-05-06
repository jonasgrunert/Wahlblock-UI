import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Button, Columns, Column, Control, Field, Input as BInput, Label } from 'bloomer';

export const TextInput = field => <BInput {...field.input} />;

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.bool,
};

TextInput.defaultProps = {
  state: false,
};

export class LoginForm extends React.Component {
  componentWillMount() {
    this.props.generateKey();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field>
          <Label>Name</Label>
          <Control>
            <ReduxField
              name="name"
              component={TextInput}
              type="text"
              placeholder="Max Mustermann"
            />
          </Control>
        </Field>
        <Field>
          <Label>PIN</Label>
          <Control>
            <ReduxField
              name="pin"
              component={TextInput}
              type="password"
              placeholder="Your PIN"
              state={this.props.state}
            />
          </Control>
        </Field>
        <Columns isMobile>
          <Column isSize="full">
            <Button
              type="submit"
              isColor="primary"
              isSize="medium"
              isPulled="right"
              isOutlined
              isLoading={this.props.state}
            >
              Login
            </Button>
          </Column>
        </Columns>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  generateKey: PropTypes.func.isRequired,
  state: PropTypes.bool,
};

LoginForm.defaultProps = {
  state: false,
};
