import {
  AppBar, Toolbar, useTheme, useMediaQuery,
} from '@mui/material';

import React, { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import DrawerNav from './DrawerNav';
import { navLinks, navButtons } from './navlink';

function Navbar() {
  const [value, setValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const isMobileMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        boxShadow: 'none',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <Toolbar>
        {isMobileMD ? (
          <MobileNav
            setOpenDrawer={setOpenDrawer}
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
          />
        ) : (
          <DesktopNav
            value={value}
            setValue={setValue}
            navLinks={navLinks}
            navButtons={navButtons}
          />
        )}
        <DrawerNav
          setOpenDrawer={setOpenDrawer}
          openDrawer={openDrawer}
          navLinks={navLinks}
          navButtons={navButtons}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
