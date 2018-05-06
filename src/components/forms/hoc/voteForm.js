import { compose, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { addVote } from '../../../queries/mutation.gql';
import { Vote } from '../base/VoteForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    ownProps.mutate({
      ballot: ownProps.hashkey,
      voting: ownProps.vote,
    });
  },
});

const mapStateToProps = (state) => {
  if (
    state.form.vote === undefined ||
    state.form.vote.values === undefined ||
    state.form.vote.values.selection === undefined
  ) {
    return {
      hashkey: state.repository.Login.value.hash,
      options: state.repository.Information.value.selectionOptions,
    };
  }
  return {
    hashkey: state.repository.Login.value.hash,
    vote: state.form.vote.values.selection,
    options: state.repository.Information.value.selectionOptions,
  };
};

const VoteFormWrapper = compose(
  connect(mapStateToProps, null),
  graphql(addVote, {
    options: props => ({
      variables: {
        ballot: props.hashkey,
        voting: props.vote,
      },
    }),
  }),
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'vote' }),
)(Vote);

export default VoteFormWrapper;
