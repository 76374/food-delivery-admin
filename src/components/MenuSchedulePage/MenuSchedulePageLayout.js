import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Divider from '@material-ui/core/Divider';
import MenuList from './MenuList/MenuList';
import ContentContainer from '../ContentContainer/ContentContainer';

const MenuSchedulePageLayout = (props) => {
  const data = props.menuSchedule;

  const [editMode, setEditMode] = useState(false);

  const addClickHandler = useCallback(() => {
    setEditMode(true);
  }, []);

  const editCancelHandler = useCallback(() => {
    setEditMode(false);
  }, []);

  let mainLayout;
  if (editMode) {
    mainLayout = <MenuList onCancel={editCancelHandler} />;
  } else if (!data) {
    mainLayout = (
      <Button variant="contained" color="primary" onClick={addClickHandler}>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>
    );
  } else {
    
  }
  return (
    <ContentContainer
      content={
        <>
          <div>
            <DatePicker selected={new Date()} />
          </div>
          <br />
          <Divider />
          <br />
          {mainLayout}
        </>
      }
    ></ContentContainer>
  );
};

export default MenuSchedulePageLayout;
