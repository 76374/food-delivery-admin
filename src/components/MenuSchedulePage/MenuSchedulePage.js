import React, { useState } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import env from '../../Environment';
import MenuSchedulePageLayout from './MenuSchedulePageLayout';

const MenuSchedulePageQuery = graphql`
  query MenuSchedulePageQuery($date: Date!) {
    menuSchedule(date: $date) {
      id
      date
      categories {
        ...ScheduleCategory_scheduleCategory
      }
    }
  }
`;

const MenuSchedulePage = () => {
  const [date, setDate] = useState(new Date());

  const dateChangeHandler = (date) => {
    setDate(date);
  };

  const render = ({ error, props }) => (
    <MenuSchedulePageLayout
      date={date}
      menuSchedule={props && props.menuSchedule}
      error={error}
      onDateChange={dateChangeHandler}
    />
  );
  return (
    <QueryRenderer
      environment={env}
      query={MenuSchedulePageQuery}
      variables={{ date }}
      render={render}
    />
  );
};

export default MenuSchedulePage;
