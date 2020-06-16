import React, { useState, useEffect } from 'react';
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

  const render = (renderProps) => {
    const { error, props, retry } = renderProps;
    return (
      <MenuSchedulePageLayout
        date={date}
        menuSchedule={props && props.menuSchedule}
        error={error}
        onDateChange={dateChangeHandler}
        onEditComplete={retry}
      />
    );
  };
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
