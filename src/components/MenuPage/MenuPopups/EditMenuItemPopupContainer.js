import React, { useState, useCallback } from 'react';
import Router from 'next/router';
import createMenuItem from '../../../mutations/createMenuItem';
import editMenuItem from '../../../mutations/editMenuItem';
import EditMenuItemPopup from './EditMenuItemPopup';

const EditMenuItemPopupContainer = (props) => {
  const { data, onCancel } = props;
  const { title, price, categoryTitle, categoryId, itemId } = data;
  const [disabled, setDisabled] = useState(false);

  const editSubmitHandler = useCallback(
    (data) => {
      setDisabled(true);
      if (itemId) {
        editMenuItem(
          {
            id: itemId,
            title: data.title,
            price: data.price,
            categoryId: categoryId,
          },
          editCompleteHandler,
          editErrorHandler
        );
      } else {
        createMenuItem(
          { title: data.title, price: data.price, category: categoryId },
          editCompleteHandler,
          editErrorHandler
        );
      }
    },
    [itemId, categoryId]
  );

  const cancelHandler = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  const editCompleteHandler = useCallback(() => {
    Router.reload();
  }, []);

  const editErrorHandler = useCallback(() => {
    setDisabled(false);
  }, [setDisabled]);

  return (
    <EditMenuItemPopup
      onCancel={cancelHandler}
      onSubmit={editSubmitHandler}
      title={title}
      price={price}
      categoryTitle={categoryTitle}
      disabled={disabled}
    />
  );
};

export default EditMenuItemPopupContainer;
