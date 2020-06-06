import { graphql } from 'react-relay';
import sendMutation from './sendMutation';

const mutation = graphql`
  mutation editMenuCategoryMutation($id: String!, $title: String!) {
    editMenuCategory(id: $id, title: $title) {
      id
    }
  }
`;

function editMenuCategory(data, onComplete, onError) {
  return sendMutation(mutation, { ...data }, onComplete, onError);
}

export default editMenuCategory;
