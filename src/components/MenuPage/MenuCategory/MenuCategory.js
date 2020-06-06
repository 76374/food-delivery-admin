import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MenuItem from './MenuItem/MenuItem';
import styles from './MenuCategory.module.css';

const MenuCategory = (props) => {
  const {
    menuCategory,
    onItemEdit,
    onItemDelete,
    onItemAdd,
    onCategoryEdit,
    onCategoryDelete,
  } = props;
  const { title, id } = menuCategory;

  const categoryEditHandler = useCallback(() => {
    if (onCategoryEdit) {
      onCategoryEdit({ title, id });
    }
  }, [onCategoryEdit, title, id]);

  const deleteCategoryHandler = useCallback(() => {
    if (onCategoryDelete) {
      onCategoryDelete(id);
    }
  }, [onCategoryDelete]);

  const editItemHandler = useCallback(
    (itemData) => {
      if (onItemEdit) {
        onItemEdit({ itemData, title, id });
      }
    },
    [title, title, id]
  );

  const deleteItemHandler = useCallback(
    (id) => {
      onItemDelete && onItemDelete(id);
    },
    [onItemDelete]
  );

  const addItemHandler = useCallback(() => {
    if (onItemAdd) {
      onItemAdd({ title, id });
    }
  }, [onItemAdd]);

  const getMenuItem = (data) => {
    return (
      <MenuItem
        menuItem={data}
        key={data.__id}
        onEdit={editItemHandler}
        onDelete={deleteItemHandler}
      />
    );
  };

  let deleteCategoryBt = null;
  if (!props.menuCategory.items || props.menuCategory.items.length === 0) {
    deleteCategoryBt = (
      <td>
        <IconButton onClick={deleteCategoryHandler} size="small">
          <DeleteIcon />
        </IconButton>
      </td>
    );
  }

  return (
    <>
      <tr>
        <td colSpan="2">
          <div className={styles.title}>
            <Typography variant="h5" align="center">
              {title}
            </Typography>
          </div>
        </td>
        <td>
          <IconButton onClick={categoryEditHandler} size="small">
            <EditIcon />
          </IconButton>
        </td>
        {deleteCategoryBt}
      </tr>
      {props.menuCategory.items.map((item) => getMenuItem(item))}
      <tr>
        <td colSpan="4">
          <IconButton onClick={addItemHandler}>
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
        </td>
      </tr>
    </>
  );
};

export default createFragmentContainer(MenuCategory, {
  menuCategory: graphql`
    fragment MenuCategory_menuCategory on MenuCategory {
      id
      title
      items {
        ...MenuItem_menuItem
      }
    }
  `,
});
