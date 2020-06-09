import React, { useState, useCallback } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const MenuListItem = (props) => {
  const { menuItem, disabled, onChange } = props;
  const [isChecked, setIsChecked] = useState(false);
  const changeHandler = useCallback(
    (e, checked) => {
      setIsChecked(checked);
      onChange && onChange(checked, menuItem.id);
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
