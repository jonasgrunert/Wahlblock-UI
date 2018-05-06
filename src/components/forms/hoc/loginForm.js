import { connect as reduxConnect } from 'react-redux';
import { reduxForm } from 'redux-form';
import connect from 'react-redux-fetch';
import { createHash } from 'crypto';

import { setKey } from '../../../actions/actions';
import { baseServiceUrl, loginServiceUrl } from '../../../config/serviceLink';
import { LoginForm } from '../base/LoginForm';

const randomstring = require('randomstring');

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
      hash.update(randomstring.generate());
      dispatch(setKey(hash.digest('hex')));
    }
  },
});

const LoginFormContainer = reduxConnect(mapStateToProps, mapDispatchToProps)(LoginFormWrapper);

const LoginFormFetch = connect(props => [
  {
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
  },
])(LoginFormContainer);

const mapStateToContainer = (state) => {
  if (
    state.form.login === undefined ||
    state.form.login.values === undefined ||
    state.form.login.values.name === undefined ||
    state.form.login.values.pin === undefined
  ) {
    return {
      publicKey: state.hash,
    };
  }
  return {
    publicKey: state.hash,
    idCardNumber: state.form.login.values.name,
    voterKey: state.form.login.values.pin,
  };
};

export default reduxConnect(mapStateToContainer, null)(LoginFormFetch);
