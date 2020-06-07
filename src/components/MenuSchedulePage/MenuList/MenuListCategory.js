import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import FormLabel from '@material-ui/core/FormLabel';
import MenuListItem from './MenuListItem';

const MenuListCategory = (props) => {
  const { menuCategory, onItemAdd, onItemRemove } = props;
  const { title, items } = menuCategory;

  const itemChangeHandler = useCallback(
    (checked, id) => {
      if (checked) {
        onItemAdd && onItemAdd(id);
      } else {
        onItemRemove && onItemRemove(id);
      }
    },
    [onItemAdd, onItemRemove]
  );

  return (
    <>
      <FormLabel>{title}</FormLabel>
      {items.map((i) => (
        <MenuListItem menuItem={i} key={i.__id} onChange={itemChangeHandler} />
      ))}
    </>
  );
};

export default createFragmentContainer(MenuListCategory, {
  menuCategory: graphql`
    fragment MenuListCategory_menuCategory on MenuCategory {
      id
      title
      items {
        ...MenuListItem_menuItem
      }
    }
  `,
});
