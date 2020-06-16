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
  const { menu, menuSchedule, date, onCancel } = props;

  const [checkedItems, setCheckedItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onCancelClick = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  const itemAddHandler = useCallback(
    (categoryId, itemId) => {
      setCheckedItems((checkedItems) => {
        checkedItems = checkedItems ? { ...checkedItems } : {};
        if (!checkedItems[categoryId]) {
          checkedItems[categoryId] = [itemId];
        } else {
          checkedItems[categoryId] = [...checkedItems[categoryId], itemId];
        }
        return checkedItems;
      });
    },
    [setCheckedItems]
  );

  const itemRemoveHandler = useCallback(
    (categoryId, itemId) => {
      setCheckedItems((checkedItems) => {
        if (!checkedItems || !checkedItems[categoryId]) {
          return;
        }
        checkedItems = { ...checkedItems };
        checkedItems[categoryId] = checkedItems[categoryId].filter((i) => i !== itemId);
        return checkedItems;
      });
    },
    [setCheckedItems]
  );

  const submitClickHandler = useCallback(() => {
    if (!checkedItems) {
      return;
    }
    setIsLoading(true);
    const itemIds = Object.values(checkedItems).flat();
    setSchedule(
      {
        items: itemIds,
        date: date,
      },
      setSheduleCompleteHandler,
      setSheduleErrorHandler
    );
  }, [checkedItems, date]);

  const setSheduleCompleteHandler = useCallback(() => {
    Router.reload();
  }, []);

  const setSheduleErrorHandler = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (!menu) {
    return getLoading();
  }

  if (!checkedItems && menuSchedule && menuSchedule.categories) {
    const ci = {};
    menuSchedule.categories.forEach((c) => {
      ci[c.category.id] = c.items.map((i) => i.id);
    });
    setCheckedItems(ci);
  }

  return (
    <ContentContainer
      content={
        <>
          {isLoading ? getLoading() : null}
          {menu.map((cat) => (
            <MenuListCategory
              menuCategory={cat}
              key={'MenuListCategory-' + cat.id}
              disabled={isLoading}
              onItemAdd={(itemId) => itemAddHandler(cat.id, itemId)}
              onItemRemove={(itemId) => itemRemoveHandler(cat.id, itemId)}
              checkedItems={checkedItems && checkedItems[cat.id]}
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
