import React from 'react';
import { createFragmentContainer } from 'react-relay';
import Typography from '@material-ui/core/Typography';
import ScheduleItem from './ScheduleItem/ScheduleItem';

const ScheduleCategory = (props) => {
  const data = props.scheduleCategory;
  return (
    <>
      <Typography variant="h6">{data.category.title}</Typography>
      {data.items.map((i) => (
        <ScheduleItem menuItem={i} key={i.__id} />
      ))}
    </>
  );
};

export default createFragmentContainer(ScheduleCategory, {
  scheduleCategory: graphql`
    fragment ScheduleCategory_scheduleCategory on ScheduleCategory {
      category {
        title
      }
      items {
        ...ScheduleItem_menuItem
      }
    }
  `,
});
