import { graphql, commitMutation } from 'react-relay';
import env from '../Environment';

const mutation = graphql`
  mutation deleteMenuItemMutation($id: String!) {
    deleteMenuItem(id: $id)
  }
`;

function deleteMenuItem(id, onComplete) {
  return commitMutation(env, {
    mutation,
    variables: {
      id,
    },
    onCompleted: (store) => {
      if (onComplete) {
        onComplete();
      }
    },
    onError: (e) => {
      alert('Something happened on the server');
    },
  });
}

export default deleteMenuItem;
