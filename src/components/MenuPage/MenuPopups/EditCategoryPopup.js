import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './EditPopup.module.css';
import Popup from './Popup';

const EditCategoryPopup = (props) => {
  const { onSubmit, onCancel, disabled } = props;

  const [title, setTitle] = useState(props.title || '');

  const titleChangedHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = () => {
    onSubmit && onSubmit(title);
  };

  const cancelHandler = () => {
    onCancel && onCancel();
  };
  const submitEnabled = !!title;
  return (
    <Popup
      disabled={disabled}
      submitEnabled={submitEnabled}
      onCancel={cancelHandler}
      onSubmit={submitHandler}
      children={
        <TextField
          className={styles.inputField}
          label="Title"
          onChange={titleChangedHandler}
          value={title}
          disabled={props.disabled}
        />
      }
    />
  );
};

export default EditCategoryPopup;
