import { commitMutation } from 'react-relay';
import env from '../Environment';

const sendMutation = (mutation, variables, onComplete, onError) =>
  commitMutation(env, {
    mutation,
    variables,
    onCompleted: (store, errors) => {
      if (errors && errors.length) {
        alert('server error: ' + errors[0].message);
        onError && onError();
      } else {
        onComplete && onComplete();
      }
    },
    onError: (e) => {
      alert('server error: ' + e.message);
      onError && onError();
    },
  });

export default sendMutation;
