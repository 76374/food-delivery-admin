import { graphql, commitMutation } from 'react-relay';
import env from '../Environment';

const mutation = graphql`
  mutation editMenuItemMutation($id: String!, $menuItem: MenuItemInput!) {
    editMenuItem(id: $id, menuItem: $menuItem) {
      id
    }
  }
`;

function editMenuItem(data, onComplete) {
  return commitMutation(env, {
    mutation,
    variables: {
      id: data.id,
      menuItem: {
        title: data.title,
        price: data.price,
        menuCategory: data.categoryTitle,
      },
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

export default editMenuItem;
