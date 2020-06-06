import { graphql } from 'react-relay';
import sendMutation from './sendMutation';

const mutation = graphql`
  mutation createMenuItemMutation($menuItem: MenuItemInput!) {
    createMenuItem(menuItem: $menuItem) {
      id
    }
  }
`;

function createMenuItem(data, onComplete, onError) {
  const variables = {
    menuItem: {
      title: data.title,
      price: data.price,
      menuCategory: data.categoryTitle,
    },
  };
  return sendMutation(mutation, variables, onComplete, onError);
}

export default createMenuItem;
