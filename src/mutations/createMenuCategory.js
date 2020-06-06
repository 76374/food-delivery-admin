import { graphql } from 'react-relay';
import sendMutation from './sendMutation';

const mutation = graphql`
  mutation createMenuCategoryMutation($title: String!) {
    createMenuCategory(title: $title) {
      id
    }
  }
`;

function createMenuCategory(title, onComplete, onError) {
  return sendMutation(mutation, { title }, onComplete, onError);
}

export default createMenuCategory;
