import { graphql } from 'react-relay';
import sendMutation from './sendMutation';

const mutation = graphql`
  mutation deleteMenuCategoryMutation($id: String!) {
    deleteMenuCategory(id: $id)
  }
`;

function deleteMenuCategory(id, onComplete, onError) {
  return sendMutation(mutation, { id }, onComplete, onError);
}

export default deleteMenuCategory;
