import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider,
} from '@mui/material';

function DrawerNav({
  setOpenDrawer, openDrawer, navLinks, navButtons,
}) {
  return (
    <Drawer anchor="top" open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <Box sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'primary.main',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {link.icon}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6">
                  {link.name}
                </Typography>
              </ListItemText>
            </ListItemButton>

          ))}

          <Divider sx={{ backgroundColor: 'white' }} />

          {navButtons.map((button) => (
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {button.icon}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6">
                  {button.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          ))}

        </List>
      </Box>
    </Drawer>
  );
}

DrawerNav.propTypes = {
  setOpenDrawer: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  })).isRequired,
  navButtons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  })).isRequired,
};

export default DrawerNav;
