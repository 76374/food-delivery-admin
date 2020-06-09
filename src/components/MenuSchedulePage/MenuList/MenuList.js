import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import env from '../../../Environment';
import MenuListLayout from './MenuListLayout';

const MenuListQuery = graphql`
  query MenuListQuery {
    menu {
      ...MenuListCategory_menuCategory
    }
  }
`;

const MenuList = (props) => {
  const render = (renderProps) => (
    <MenuListLayout
      date={props.date}
      menu={renderProps.props && renderProps.props.menu}
      error={renderProps.error}
      onCancel={props.onCancel}
    />
  );
  return <QueryRenderer environment={env} query={MenuListQuery} render={render} />;
};

export default MenuList;
