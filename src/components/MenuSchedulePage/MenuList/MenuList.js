import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import env from '../../../Environment';
import MenuListLayout from './MenuListLayout';

const MenuListQuery = graphql`
  query MenuListQuery($date: Date!) {
    menu {
      id
      ...MenuListCategory_menuCategory
    }
    menuSchedule(date: $date) {
      categories {
        category {
          id
        }
        items {
          id
        }
      }
    }
  }
`;

const MenuList = (props) => {
  const date = props.date;
  const render = (renderProps) => (
    <MenuListLayout
      date={date}
      menu={renderProps.props && renderProps.props.menu}
      menuSchedule={renderProps.props && renderProps.props.menuSchedule}
      error={renderProps.error}
      onCancel={props.onCancel}
    />
  );
  return (
    <QueryRenderer environment={env} query={MenuListQuery} variables={{ date }} render={render} />
  );
};

export default MenuList;
