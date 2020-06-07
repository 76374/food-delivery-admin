import React from 'react';

const ScheduleItem = (props) => {
    return (<div>{props.scheduleItem.title}</div>);
}

export default createFragmentContainer(ScheduleItem, {
    scheduleItem: graphql`
      fragment ScheduleItem_scheduleItem on MenuItem {
        id
        title
        price
      }
    `,
  });