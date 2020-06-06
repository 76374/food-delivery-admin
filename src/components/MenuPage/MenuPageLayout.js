import React, { useState, useCallback } from 'react';
import Router from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import deleteMenuItem from '../../mutations/deleteMenuItem';
import deleteMenuCategory from '../../mutations/deleteMenuCategory';
import ContentContainer from '../ContentContainer/ContentContainer';
import MenuCategory from './MenuCategory/MenuCategory';
import EditMenuItemPopupContainer from './MenuPopups/EditMenuItemPopupContainer';
import EditCategoryPopupContainer from './MenuPopups/EditCategoryPopupContainer';


const MenuPageLayout = (props) => {
  const [editItemProps, setEditItemProps] = useState(null);
  const [editCategoryProps, setEditCategoryProps] = useState(null);

  const categoryAddHandler = useCallback(() => {
    setEditCategoryProps({});
  }, []);

  const categoryEditHandler = useCallback((data) => {
    setEditCategoryProps({...data});
  }, []);

  const categoryEditCancelHandler = useCallback(() => {
    setEditCategoryProps(null);
  }, []);

  const categoryDeleteHandler = useCallback((id) => {
    deleteMenuCategory(id, deleteCompleteHandler)
  }, [])

  const itemAddHandler = useCallback(
    (data) => {
      setEditItemProps({
        categoryTitle: data.title,
        categoryId: data.id,
      });
    },
    [setEditItemProps]
  );

  const itemEditHandler = useCallback(
    (data) => {
      setEditItemProps({
        itemId: data.itemData.id,
        title: data.itemData.title,
        price: data.itemData.price,
        categoryTitle: data.title,
        categoryId: data.id,
      });
    },
    [setEditItemProps]
  );

  const deleteItemHandler = useCallback((id) => {
    deleteMenuItem(id, deleteCompleteHandler);
  }, []);

  const deleteCompleteHandler = useCallback(() => {
    Router.reload();
  }, []);

  const onEditItemCanceled = useCallback(() => {
    setEditItemProps(null);
  }, [setEditItemProps]);

  const getMenuLayout = () => {
    return (
      <>
        <table className="table">
          <tbody>
            {props.menu.map((c) => (
              <MenuCategory
                menuCategory={c}
                key={'Category-' + c.__id}
                onItemEdit={itemEditHandler}
                onItemDelete={deleteItemHandler}
                onItemAdd={itemAddHandler}
                onCategoryEdit={categoryEditHandler}
                onCategoryDelete={categoryDeleteHandler}
              />
            ))}
          </tbody>
        </table>
        <IconButton onClick={categoryAddHandler}>
          <AddCircleOutlineIcon fontSize="large" color="primary" />
        </IconButton>
      </>
    );
  };

  const getEditItemLayout = () => {
    if (editItemProps === null) {
      return null;
    }
    const itemData = { ...editItemProps };
    return <EditMenuItemPopupContainer data={itemData} onCancel={onEditItemCanceled}/>;
  };
  const getEditCategoryLayout = () => {
    if (editCategoryProps === null) {
      return null;
    }
    const data = { ...editCategoryProps };
    return <EditCategoryPopupContainer data={data} onCancel={categoryEditCancelHandler}/>;
  }

  let layout = null;
  if (props.error) {
    layout = (
      <div>
        Error
        {props.error.message}
      </div>
    );
  } else if (props.menu) {
    layout = (
      <>
        {getMenuLayout()}
        {getEditItemLayout()}
        {getEditCategoryLayout()}
      </>
    );
  }

  return <ContentContainer content={layout}></ContentContainer>;
};

export default MenuPageLayout;
