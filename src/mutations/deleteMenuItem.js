import { graphql } from 'react-relay';

const mutation = graphql`
  mutation deleteMenuItemMutation($id: String!) {
    deleteMenuItem(id: $id)
  }
`;

function deleteMenuItem(id, onComplete, onError) {
  return sendMutation(mutation, { id }, onComplete, onError);
}

export default deleteMenuItem;
