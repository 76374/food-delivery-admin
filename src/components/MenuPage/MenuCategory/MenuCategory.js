import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Typography from '@material-ui/core/Typography';

import MenuItem from './MenuItem/MenuItem';
import styles from './MenuCategory.module.css';
import { Divider } from '@material-ui/core';

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

  const getMenuItem = (data) => {
    return (
      <>
        <MenuItem
          menuItem={data}
          key={data.__id}
          editClicked={onEditItemClicked}
          deleteClicked={onDeleteItemClicked}
        />
        <Divider />
      </>
    );
  };

  return (
    <>
      <tr>
        <td colSpan="4">
          <div className={styles.title}>
            <Typography variant="h5" align="center">
              {title}
            </Typography>
          </div>
        </td>
      </tr>
      {props.menuCategory.items.map((item) => getMenuItem(item))}
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
