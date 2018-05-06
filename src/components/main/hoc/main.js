import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { Main } from '../base/Main';

const mapStateToProps = (state) => {
  if (state.repository.Login === undefined) {
    return {
      fulfilled: false,
    };
  }
  return {
    login: state.repository.Login.fulfilled,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  redirect: () => {
    if (ownProps.login) {
      dispatch(push('/btw17/vote'));
    }
  },
});

export default connect(mapStateToProps, null)(connect(null, mapDispatchToProps)(Main));
