import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import MenuList from './MenuList/MenuList';
import ContentContainer from '../ContentContainer/ContentContainer';
import ScheduleCategory from './ScheduleCategory/ScheduleCategory';


const MenuSchedulePageLayout = (props) => {
  const data = props.menuSchedule;
  const { date, error, onDateChange } = props;

  const [editMode, setEditMode] = useState(false);

  const addClickHandler = useCallback(() => {
    setEditMode(true);
  }, []);

  const editClickHandler = useCallback(() => {
    setEditMode(true);
  }, []);

  const editCancelHandler = useCallback(() => {
    setEditMode(false);
  }, []);

  const handleDateChange = useCallback((date) => {
    onDateChange && onDateChange(date);
  }, []);

  let mainLayout;
  if (error) {
    mainLayout = <Typography color="error">{error.message}</Typography>
  } else if (editMode) {
    mainLayout = <MenuList date={date} onCancel={editCancelHandler} />;
  } else if (!data) {
    mainLayout = (
      <Button variant="contained" color="primary" onClick={addClickHandler}>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>
    );
  } else {
    mainLayout = (
      <>
        <Button variant="contained" color="primary" onClick={editClickHandler}>
          <EditIcon />
        </Button>
        <br/>
        {data.categories.map((i) => (
          <ScheduleCategory scheduleCategory={i} key={i.__id} />
        ))}
      </>
    );
  }
  return (
    <ContentContainer
      content={
        <>
          <div>
            <DatePicker selected={date} onChange={handleDateChange} />
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
