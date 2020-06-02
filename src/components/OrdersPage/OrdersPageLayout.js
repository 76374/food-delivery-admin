import React from 'react';
import Order from './Order/Order';
import { tab } from '../NavBar/NavBar';
import PageLayout from '../PageLayout/PageLayout';
import { Paper } from '@material-ui/core';
import ContentContainer from '../ContentContainer/ContentContainer';

const OrdersPageLayout = (props) => {
  if (props.error) {
    return <div>{JSON.stringify(props.error)}</div>;
  }
  if (!props.orders) {
    return <div>loading</div>;
  }
  const orders = props.orders.map((order, index) => <Order order={order} key={'Order' + index} />);
  return <ContentContainer content={orders} />;
};

export default OrdersPageLayout;
