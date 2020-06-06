import { useCallback, useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuBook from '@material-ui/icons/MenuBook';
import ListAlt from '@material-ui/icons/ListAlt';
import { useRouter } from 'next/router';
import { page } from '../../consts/path';
import { Paper } from '@material-ui/core';

const tab = {
  menu: 0,
  orders: 1,
};

const getUrl = (tabValue) => {
  switch (tabValue) {
    case 0:
      return page.menu;
    case 1:
      return page.orders;
    default:
      throw new Error('Unexpected page value ' + tabValue);
  }
};

const getTabIndex = (path) => {
  switch (path) {
    case page.menu:
      return 0;
    case page.orders:
      return 1;
    default:
      throw new Error('Unexpected page value ' + tabValue);
  }
};

const NavBar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setCurrentTab(getTabIndex(router.pathname));
  }, [router]);

  const onTabChange = useCallback((e, value) => {
    setCurrentTab(value);
    router.push(getUrl(value));
  });
  return (
    <Paper>
      <Tabs value={currentTab} onChange={onTabChange} centered>
        <Tab icon={<MenuBook />} value={tab.menu} />
        <Tab label={<ListAlt />} value={tab.orders} />
      </Tabs>
    </Paper>
  );
};

export { tab };
export default NavBar;
