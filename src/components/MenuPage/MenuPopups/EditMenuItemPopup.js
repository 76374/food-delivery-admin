import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './EditPopup.module.css';
import Popup from './Popup';

const EditMenuItemPopup = (props) => {
  const { title, price, categoryTitle, onSubmit, onCancel, disabled } = props;

  const [formData, setFormData] = useState({
    title: title || '',
    price: price || '',
    //categoryTitle: categoryTitle || '',
  });

  const submitHandler = () => {
    onSubmit && onSubmit({ ...formData });
  };

  const onTitleChanged = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  /*const onCategoryChanged = (e) => {
    setFormData({ ...formData, categoryTitle: e.target.value });
  };*/
  const onPriceChanged = (e) => {
    setFormData({ ...formData, price: +e.target.value });
  };

  const cancelHandler = () => {
    onCancel && onCancel();
  };

  const submitEnabled = formData.title && formData.categoryTitle && formData.price;
  return (
    <Popup
      disabled={disabled}
      submitEnabled={submitEnabled}
      onCancel={cancelHandler}
      onSubmit={submitHandler}
      children={
        <>
          <div>{categoryTitle}</div>
          <TextField
            className={styles.inputField}
            label="Title"
            onChange={onTitleChanged}
            value={formData.title}
            disabled={disabled}
          />
          <TextField
            className={styles.inputField}
            label="Price"
            type="number"
            min="0"
            value={formData.price}
            onChange={onPriceChanged}
            disabled={disabled}
          />
          {/*<TextField
          className={styles.inputField}
          label="Category"
          value={formData.categoryTitle}
          onChange={onCategoryChanged}
          disabled={disabled}
        />*/}
        </>
      }
    />
  );
};

export default EditMenuItemPopup;
