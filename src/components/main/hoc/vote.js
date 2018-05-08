import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Vote } from '../base/Vote';

const mapStateToProps = state => ({
  login: state.repository.Login.fulfilled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  redirect: () => {
    if (!ownProps.login) {
      dispatch(push('/btw17/login'));
    }
  },
});

// wrapping first with state then checking it or redirection
export default connect(mapStateToProps, null)(connect(null, mapDispatchToProps)(Vote));
