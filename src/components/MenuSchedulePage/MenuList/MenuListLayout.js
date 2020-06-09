import React, { useCallback, useState } from 'react';
import Router from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import DoneOutline from '@material-ui/icons/DoneOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuListCategory from './MenuListCategory';
import ContentContainer from '../../ContentContainer/ContentContainer';
import setSchedule from '../../../mutations/setSchedule';

const getLoading = () => <LinearProgress color="secondary" />;

const MenuListLayout = (props) => {
  const { menu, date, onCancel } = props;

  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onCancelClick = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  const itemAddHandler = useCallback(
    (id) => {
      setSelectedItems((prevItems) => [...prevItems, id]);
    },
    [setSelectedItems]
  );

  const itemRemoveHandler = useCallback(
    (id) => {
      setSelectedItems((prevItems) => prevItems.filter((i) => i !== id));
    },
    [setSelectedItems]
  );

  const submitClickHandler = useCallback(() => {
    setIsLoading(true);
    setSchedule(
      {
        items: selectedItems,
        date: date,
      },
      setSheduleCompleteHandler,
      setSheduleErrorHandler
    );
  }, [selectedItems, date]);

  const setSheduleCompleteHandler = useCallback(() => {
    Router.reload();
  }, []);

  const setSheduleErrorHandler = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (!menu) {
    return getLoading();
  }

  return (
    <ContentContainer
      content={
        <>
          {isLoading ? getLoading() : null}
          {menu.map((i) => (
            <MenuListCategory
              menuCategory={i}
              key={i.__id}
              disabled={isLoading}
              onItemAdd={itemAddHandler}
              onItemRemove={itemRemoveHandler}
            />
          ))}
          <div>
            <IconButton disabled={isLoading} onClick={submitClickHandler}>
              <DoneOutline fontSize="large" color="primary" />
            </IconButton>
            <IconButton disabled={isLoading} onClick={onCancelClick}>
              <HighlightOff fontSize="large" color="error" />
            </IconButton>
          </div>
        </>
      }
    />
  );
};

export default MenuListLayout;
