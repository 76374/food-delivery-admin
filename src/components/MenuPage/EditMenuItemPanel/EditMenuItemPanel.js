import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DoneOutline from '@material-ui/icons/DoneOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';
import styles from './EditMenuItemPanel.module.css';

const EditMenuItemPanel = (props) => {
  const [formData, setFormData] = useState({
    title: props.title || '',
    price: props.price || '',
    categoryTitle: props.categoryTitle || ''
  });

  const onSubmit = (e) => {
    e.preventDefault();

    props.submited && props.submited({ ...formData });
  };

  const onTitleChanged = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const onCategoryChanged = (e) => {
    setFormData({ ...formData, categoryTitle: e.target.value });
  };
  const onPriceChanged = (e) => {
    setFormData({ ...formData, price: +e.target.value });
  };

  const onCancelClick = () => {
    if (props.canceled) {
      props.canceled();
    }
  };

  const submitEnabled = formData.title && formData.categoryTitle && formData.price;
  return (
    <Modal open className={styles.modal}>
      <Paper className={styles.popup}>
        <form className={styles.inputsContainer}>
          <TextField
            className={styles.inputField}
            label="Title"
            onChange={onTitleChanged}
            value={formData.title}
          />
          <TextField
            className={styles.inputField}
            label="Price"
            type="number"
            min="0"
            value={formData.price}
            onChange={onPriceChanged}
          />
          <TextField
            className={styles.inputField}
            label="Category"
            value={formData.categoryTitle}
            onChange={onCategoryChanged}
          />
          <div className={styles.buttonsContainer}>
            <IconButton disabled={!submitEnabled} onClick={onSubmit}>
              <DoneOutline fontSize="large" color="primary"/>
            </IconButton>
            <IconButton onClick={onCancelClick}>
              <HighlightOff fontSize="large" color="error" />
            </IconButton>
          </div>
        </form>
      </Paper>
    </Modal>
  );
};

export default EditMenuItemPanel;
