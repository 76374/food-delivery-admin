import React from 'react';
import { createFragmentContainer } from 'react-relay';
import Typography from '@material-ui/core/Typography';

const ScheduleItem = (props) => {
  return <Typography>{props.menuItem.title}</Typography>;
};

export default createFragmentContainer(ScheduleItem, {
  menuItem: graphql`
    fragment ScheduleItem_menuItem on MenuItem {
      id
      title
      price
    }
  `,
});
