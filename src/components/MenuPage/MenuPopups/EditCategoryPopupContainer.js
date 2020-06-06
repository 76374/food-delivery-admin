import React, { useState, useCallback } from 'react';
import Router from 'next/router';
import EditCategoryPopup from './EditCategoryPopup';
import editMenuCategory from '../../../mutations/editMenuCategory';
import createMenuCategory from '../../../mutations/createMenuCategory';

const EditCategoryPopupContainer = (props) => {
  const { data, onCancel } = props;
  const { title, id } = data;
  const [disabled, setDisabled] = useState(false);

  const editSubmitHandler = useCallback(
    (title) => {
      setDisabled(true);
      if (id) {
        editMenuCategory({ id, title }, editCompletedHandler, editErrorHandler);
      } else {
        createMenuCategory(title, editCompletedHandler, editErrorHandler);
      }
    },
    [id]
  );

  const cancelHandler = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  const editCompletedHandler = useCallback(() => {
    Router.reload();
  }, []);

  const editErrorHandler = useCallback(() => {
    setDisabled(false);
  }, [setDisabled]);

  return (
    <EditCategoryPopup
      onCancel={cancelHandler}
      onSubmit={editSubmitHandler}
      title={title}
      disabled={disabled}
    />
  );
};

export default EditCategoryPopupContainer;
