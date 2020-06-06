import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import styles from './MenuItem.module.css';

const MenuItem = (props) => {
  const { onEdit, onDelete, menuItem } = props;
  const { title, price, id } = menuItem;

  const editClickHandler = useCallback(() => {
    onEdit && onEdit({ title, price, id });
  }, [title, price, id, onEdit]);

  const deleteClickHandler = useCallback(() => {
    onDelete && onDelete(id);
  }, [id, onDelete]);

  return (
    <tr className={props.className}>
      <td className={styles.titleTd}>
        <Typography>{title}</Typography>
      </td>
      <td>
        <Typography>{price}</Typography>
      </td>
      <td>
        <IconButton onClick={editClickHandler} size="small">
          <EditIcon />
        </IconButton>
      </td>
      <td>
        <IconButton onClick={deleteClickHandler} size="small">
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default createFragmentContainer(MenuItem, {
  menuItem: graphql`
    fragment MenuItem_menuItem on MenuItem {
      id
      title
      price
    }
  `,
});
