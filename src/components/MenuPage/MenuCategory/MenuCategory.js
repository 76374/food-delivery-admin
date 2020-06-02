import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Typography from '@material-ui/core/Typography';

import MenuItem from './MenuItem/MenuItem';
import styles from './MenuCategory.module.css'

const MenuCategory = (props) => {
  const { menuCategory, editItemClicked, deleteItemClicked } = props;
  const { title } = menuCategory;

  const onEditItemClicked = useCallback(
    (itemData) => {
      editItemClicked &&
        editItemClicked({
          itemData,
          categoryTitle: title,
        });
    },
    [title]
  );

  const onDeleteItemClicked = useCallback((id) => {
    deleteItemClicked && deleteItemClicked(id);
  }, []);

  const getMenuItem = (data, index) =>{ 
    console.log(index % 2 ? styles.itemLine : null);
    return(
    <MenuItem
      menuItem={data}
      key={data.__id}
      editClicked={onEditItemClicked}
      deleteClicked={onDeleteItemClicked}
      className={index % 2 ? styles.itemLine : null}
    />
  );}

  return (
    <>
      <tr>
        <td colSpan="4">
          <Typography variant="h5" align="center">
            {title}
          </Typography>
        </td>
      </tr>
      {props.menuCategory.items.map((item, index) => getMenuItem(item, index))}
      <tr>
        <td colSpan="4">
          <hr />
        </td>
      </tr>
    </>
  );
};

export default createFragmentContainer(MenuCategory, {
  menuCategory: graphql`
    fragment MenuCategory_menuCategory on MenuCategory {
      title
      items {
        ...MenuItem_menuItem
      }
    }
  `,
});
