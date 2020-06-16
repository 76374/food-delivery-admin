import React, { useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const MenuListItem = (props) => {
  const { isChecked, menuItem, disabled, onChange } = props;
  const changeHandler = useCallback(
    (e, checked) => {
      onChange && onChange(checked);
    },
    [menuItem, onChange]
  );
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            disabled={disabled}
            onChange={changeHandler}
            size="small"
          />
        }
        label={menuItem.title}
      />
    </FormGroup>
  );
};

export default createFragmentContainer(MenuListItem, {
  menuItem: graphql`
    fragment MenuListItem_menuItem on MenuItem {
      id
      title
    }
  `,
});
