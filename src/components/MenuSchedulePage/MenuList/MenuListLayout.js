import React, { useCallback, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DoneOutline from '@material-ui/icons/DoneOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuListCategory from './MenuListCategory';
import ContentContainer from '../../ContentContainer/ContentContainer';

const MenuListLayout = (props) => {
  const { menu, onCancel } = props;

  const [selectedItems, setSelectedItems] = useState([]);

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

  if (!menu) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <ContentContainer
      content={
        <>
          {menu.map((i) => (
            <MenuListCategory
              menuCategory={i}
              key={i.__id}
              onItemAdd={itemAddHandler}
              onItemRemove={itemRemoveHandler}
            />
          ))}
          <div>
            <IconButton>
              <DoneOutline fontSize="large" color="primary" />
            </IconButton>
            <IconButton onClick={onCancelClick}>
              <HighlightOff fontSize="large" color="error" />
            </IconButton>
          </div>
        </>
      }
    />
  );
};

export default MenuListLayout;
