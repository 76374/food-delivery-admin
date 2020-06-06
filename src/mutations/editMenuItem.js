import { graphql } from 'react-relay';
import sendMutation from './sendMutation';

const mutation = graphql`
  mutation editMenuItemMutation($id: String!, $menuItem: MenuItemInput!) {
    editMenuItem(id: $id, menuItem: $menuItem) {
      id
    }
  }
`;

function editMenuItem(data, onComplete, onError) {
  const variables = {
    id: data.id,
    menuItem: {
      title: data.title,
      price: data.price,
      menuCategory: data.categoryId,
    },
  }
  return sendMutation(mutation, variables, onComplete, onError);
}

export default editMenuItem;
