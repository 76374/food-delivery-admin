import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import env from '../../Environment';
import MenuSchedulePageLayout from './MenuSchedulePageLayout';

const MenuSchedulePageQuery = graphql`
  query MenuSchedulePageQuery($date: Date!) {
    menuSchedule (date: $date) {
      id
      date
      items {
        ...ScheduleItem_scheduleItem
      }
    }
  }
`;

const MenuSchedulePage = () => {
  const date = new Date();
  return (
    <QueryRenderer
      environment={env}
      query={MenuSchedulePageQuery}
      variables={{ date }}
      render={({ error, props }) => (
        <MenuSchedulePageLayout menuSchedule={props && props.menuSchedule} error={error} />
      )}
    />
  );
};

export default MenuSchedulePage;
