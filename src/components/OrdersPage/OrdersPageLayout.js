import React from 'react';
import Order from './Order/Order';
import ContentContainer from '../ContentContainer/ContentContainer';

const OrdersPageLayout = (props) => {
  if (props.error) {
    return <div>{JSON.stringify(props.error)}</div>;
  }
  let orders = null;
  if (props.orders) {
    orders = props.orders.map((order, index) => <Order order={order} key={'Order' + index} />);
  }
  return <ContentContainer content={orders} />;
};

export default OrdersPageLayout;
