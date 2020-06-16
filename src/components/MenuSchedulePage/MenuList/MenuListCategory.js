import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import FormLabel from '@material-ui/core/FormLabel';
import MenuListItem from './MenuListItem';

const MenuListCategory = (props) => {
  const { menuCategory, disabled, checkedItems, onItemAdd, onItemRemove } = props;
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

  const getIsChecked = (id) => (
    checkedItems ? checkedItems.includes(id) : false
  );

  return (
    <>
      <FormLabel>{title}</FormLabel>
      {items.map((i) => (
        <MenuListItem
          menuItem={i}
          isChecked={getIsChecked(i.id)}
          key={'MenuListItem-' + i.id}
          disabled={disabled}
          onChange={(checked) => itemChangeHandler(checked, i.id)}
        />
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
        id
        ...MenuListItem_menuItem
      }
    }
  `,
});
