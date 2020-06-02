import { graphql, commitMutation } from 'react-relay';
import env from '../Environment';

const mutation = graphql`
  mutation createMenuItemMutation($menuItem: MenuItemInput!) {
    createMenuItem(menuItem: $menuItem) {
      id
    }
  }
`;

function createMenuItem(data, onComplete) {
  return commitMutation(env, {
    mutation,
    variables: {
      menuItem: {
        title: data.title,
        price: data.price,
        menuCategory: data.categoryTitle,
      },
    },
    onCompleted: store => {
        if (onComplete) {
          onComplete();
        }
    },
    onError: e => {
        alert('Something went wrong');
    }
  });
}

export default createMenuItem;
