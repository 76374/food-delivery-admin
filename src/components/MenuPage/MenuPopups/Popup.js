import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DoneOutline from '@material-ui/icons/DoneOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';
import styles from './EditPopup.module.css';

const Popup = (props) => {
  const { disabled, onSubmit, onCancel, submitDisabled } = props;

  const cancelHandler = (e) => {
    onCancel && onCancel();
  };
  const submitHandler = (e) => {
    onSubmit && onSubmit();
  };

  return (
    <Modal open className={styles.modal}>
      <Paper className={styles.popup}>
        <div className={styles.inputsContainer}>
          {props.children}
          <div className={styles.buttonsContainer}>
            <IconButton disabled={disabled || submitDisabled} onClick={submitHandler}>
              <DoneOutline fontSize="large" color="primary" />
            </IconButton>
            <IconButton onClick={cancelHandler} disabled={disabled}>
              <HighlightOff fontSize="large" color="error" />
            </IconButton>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};

export default Popup;
