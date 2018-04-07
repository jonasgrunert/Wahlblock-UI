import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField, reduxForm } from 'redux-form';
import { Button, Columns, Column, Control, Field, Input as BInput, Label } from 'bloomer';
import { connect as reduxConnect } from 'react-redux';
import connect from 'react-redux-fetch';
import { createHash } from 'crypto';

import { setKey } from '../../actions/actions';
import { baseServiceUrl, loginServiceUrl } from '../../config/serviceLink';

const randomstring = require('randomstring');

const TextInput = field => (
  <BInput {...field.input} />
);

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.bool,
};

TextInput.defaultProps = {
  state: false,
};

class LoginForm extends React.Component {
  componentWillMount() {
    this.props.generateKey();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field>
          <Label>Name</Label>
          <Control>
            <ReduxField name="name" component={TextInput} type="text" placeholder="Max Mustermann" />
          </Control>
        </Field>
        <Field>
          <Label>PIN</Label>
          <Control>
            <ReduxField name="pin" component={TextInput} type="password" placeholder="Your PIN" state={this.props.state} />
          </Control>
        </Field>
        <Columns isMobile>
          <Column isSize="full">
            <Button type="submit" isColor="primary" isSize="medium" isPulled="right" isOutlined isLoading={this.props.state}>Login</Button>
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

const LoginFormWrapper = reduxForm({ form: 'login' })(LoginForm);


const mapStateToProps = (state, ownProps) => ({
  state: ownProps.LoginFetch.pending,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    ownProps.dispatchLoginPost();
  },
  generateKey: async () => {
    if (ownProps.publicKey === null) {
      const hash = await createHash('sha256');
      hash.update(randomstring.generate);
      dispatch(setKey(hash.digest('hex')));
    }
  },
});

const LoginFormContainer = reduxConnect(mapStateToProps, mapDispatchToProps)(LoginFormWrapper);

const LoginFormFetch = connect(props => [{
  resource: 'Login',
  method: 'post',
  request: {
    url: baseServiceUrl + loginServiceUrl,
    method: 'post',
    body: {
      idCardNumber: props.idCardNumber,
      voterKey: props.voterKey,
      publicKey: props.publicKey,
    },
  },
}])(LoginFormContainer);

const mapStateToContainer = (state) => {
  if (state.form.login === undefined ||
      state.form.login.values === undefined ||
      state.form.login.values.name === undefined ||
      state.form.login.values.pin === undefined) {
    return ({
      publicKey: state.hash,
    });
  }
  return ({
    publicKey: state.hash,
    idCardNumber: state.form.login.values.name,
    voterKey: state.form.login.values.pin,
  });
};

export default reduxConnect(mapStateToContainer, null)(LoginFormFetch);
